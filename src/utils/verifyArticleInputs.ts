import { Article } from "../entities/Article";
import { ArticleInputs } from "../types/article/ArticleInputs";
import { FieldError } from "../types/FieldError";

export const verifyArticleInput  = async (
  { title, authors, keywords, pbegin, pend }: ArticleInputs,
  issueId: number,
  id: number = 0
): Promise<{ inputs?: ArticleInputs, errors?: FieldError[] }> => {
  const errors: FieldError[] = [];
  let valid = true;

  title = title.trim();
  if (!title) {
    valid = false;
    errors.push({
      field: "title",
      message: "标题不可为空",
    });
  }

  authors = authors.trim();
  if (!authors) {
    valid = false;
    errors.push({
      field: "author",
      message: "作者不可为空",
    });
  } else {
    let tmp = authors
      .trim()
      .split(";")
      .map((s) => s.trim());
    if (tmp[0] === ";") tmp = tmp.slice(1);
    if (tmp[tmp.length - 1] === ";") tmp = tmp.slice(0, tmp.length - 1);
    let f: boolean = true;
    for (let x of tmp) {
      if (!x) f = false;
    }
    authors = tmp.join(";");
    if (!f) {
      valid = false;
      errors.push({
        field: "authors",
        message: "作者名不可为空"
      });
    }
  }

  keywords = keywords.trim();
  if (!keywords) {
  } else {
    let tmp = keywords
      .trim()
      .split(";")
      .map((s) => s.trim());
    if (tmp[0] === ";") tmp = tmp.slice(1);
    if (tmp[tmp.length - 1] === ";") tmp = tmp.slice(0, tmp.length - 1);
    let f: boolean = true;
    for (let x of tmp) {
      if (!x) f = false;
    }
    keywords = tmp.join(";");
    if (!f) {
      valid = false;
      errors.push({
        field: "keywords",
        message: "关键词名不可为空"
      });
    }
  }

  if (pbegin < 1 || pend < 1 || pbegin > pend) {
    valid = false;
    errors.push({
      field: "pbegin",
      message: "页码范围错误"
    });

    errors.push({
      field: "pend",
      message: "页码范围错误"
    });
  }

  if (valid) {
    const article = await Article.findOne({
      where: {title , issueId },
    });

    if (article && article.id !== id) {
      valid =false;
      errors.push({

        field: "title",
        message: "该文章已存在",
      });
    }
  }
  if (valid) return {inputs:{title, authors, keywords, pbegin, pend}};
  else  return {errors} ;
};
