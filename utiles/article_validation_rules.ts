import {
  maxLength,
  minLength,
  numberBetween,
  required,
} from "https://deno.land/x/validasaur@v0.15.0/mod.ts";

export const articleValidationRules = {
  categorie: [required, numberBetween(0, 5)],
  subcategorie: [required, numberBetween(0, 5)],
  lieu: [required, numberBetween(0, 5)],
  prix: [required, numberBetween(0, 10000000000)],
  description: [required, minLength(4), maxLength(120)],
};
