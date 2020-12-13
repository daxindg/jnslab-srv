import { Journal } from "../entities/Journal";
import { JournalInputs } from "../types/journal/JournalInputs";
import { FieldError } from "../types/FieldError";
import { Not } from "typeorm";


export const verifyJournalInput = async ({title, issn, cn}:JournalInputs, id: number = 0) => {
    const errors: FieldError[] = [];

    if (title.length < 1) {
      errors.push({
        field: "title",
        message: "刊名不可为空"
      });
    }

    if (!/^[0-9]{4}-[0-9]{3}[0-9xX]$/.test(issn)) { 
      errors.push({
        field: "issn",
        message: "ISSN应形如NNNN-NNNC"
      });
    }
    else {
      const item = await Journal.findOne({where: {issn, id: Not(id)}});
      if (item) errors.push({
        field: "issn",
        message: "该ISSN已存在"
      })
    }

    if (!cn) {

    }
    else if (!/^[0-9]{2}-[0-9]{4}(\/[a-zA-Z]{1,2})?$/.test(cn)) { 
      errors.push({
        field: "cn",
        message: "CN应形如NN-NNNN/CC"
      });
    }
    else {
      const item = await Journal.findOne({where: {cn, id: Not(id)}});
      if (item) errors.push({
        field: "cn",
        message: "该CN号已存在"
      })
    }
    console.log(title, issn, cn,  id);

    return errors;
}