import { GroupResponseDto } from "../model/GroupResponseDto";
import dbJSON from '../mocks/groups.json'

export const fetchGroups = async (): Promise<GroupResponseDto> => {
  const isValidResult = Math.random() > 0.5;

  await new Promise((res) => setTimeout(res, 1000));

  return isValidResult ? { result: 1, data: dbJSON } : { result: 0 };
};
