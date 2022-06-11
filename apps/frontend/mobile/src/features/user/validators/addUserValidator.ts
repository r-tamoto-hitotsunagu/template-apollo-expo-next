// TODO: aliasからimport
import { UserModel } from '../../../__generated__/zod';
import type { z } from 'zod';

const pickRuleFromModel = UserModel.pick({ birthDate: true, name: true });
const customNameRule = pickRuleFromModel.shape.name.min(1, {
  message: 'required!',
});
const rule = pickRuleFromModel.extend({
  name: customNameRule,
});

export const addUserValidator = rule;
export type AddUserValidator = z.infer<typeof addUserValidator>;
