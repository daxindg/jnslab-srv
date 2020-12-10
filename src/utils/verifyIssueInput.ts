import { Issue } from "../entities/Issue";
import { IssueInputs } from "../types/IssueInputs";
import { FieldError } from "../types/FieldError";


export const verifyIssueInput = async ({year, vol, no}:IssueInputs,journalId: number, id:number = 0) => {
    const errors: FieldError[] = [];
    let valid = true;
    if (year < 1949 || year > new Date().getFullYear() + 3) {
      valid = false;
      errors.push({
        field: "year",
        message: "年份超出范围"
      });
    }

    if (vol < 0) { 
      valid = false;
      errors.push({
        field: "vol",
        message: "卷数应为正整数"
      });
    }
    
    if (no < 0) { 
      valid = false;
      errors.push({
        field: "no",
        message: "期号应为正整数"
      });
    }

    if (valid) {
      
      const issue = await Issue.findOne({where: {year, vol, no, journalId}});
      
      if (issue && issue.id != id) {
        errors.push({
          field: "year",
          message: "该期已存在"
        });
        errors.push({
          field: "vol",
          message: "该期已存在"
        });
        errors.push({
          field: "no",
          message: "该期已存在"
        });
      }
    }
    return errors;
}