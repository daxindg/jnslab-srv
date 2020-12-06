import { Catalog } from "../entities/Catalog";
import { CreateCatalogInputs } from "../types/CreateCatalogInputs";
import { FieldError } from "../types/FieldError";


export const verifyCreateCatalogInput = async ({title, issn, cn}:CreateCatalogInputs) => {
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
      const item = await Catalog.findOne({where: {issn}});
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
      const item = await Catalog.findOne({where: {cn}});
      if (item) errors.push({
        field: "cn",
        message: "该CN号已存在"
      })
    }
    

    return errors;
}