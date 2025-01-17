/** @jsx h */
import { h } from "preact";
import { Fragment } from "preact";
import { IArticleInDb } from "../interfaces/interface.ts";
import { getNumberResp } from "../utiles/number_repr.ts";
function getXFirstCharacters(word: string, max: number) {
  const l = word.length;
  const m = Math.min(max, l);
  return word.slice(0, m);
}

export default function ArticleComponent(prop: IArticleInDb) {
  const detailsUrl = `details/${prop.id}`;
  return (
    <div class="card-container">
      <article class="card">
        <div
          class="card__image"
          style="background-image: url(/img/ah1.jpg);"
        >
        </div>
        <div class="card__content">
          <h5 class="card__title">
            سيارة للبيع
          </h5>
          <div>{prop.description.slice(0, 30)}...</div>
          <div>
            <span>
              <b style={{ "font-size": "2.5em" }} dir="ltr">
                {getNumberResp(prop.prix)}
              </b>
            </span>
            <small>
              اوقية جيدة
            </small>
          </div>
        </div>
        <div class="card__footer">
          <span>{prop.dateadd}</span>
          <a href={detailsUrl}>
            تفاصيل
          </a>
        </div>
      </article>
    </div>
  );
}
