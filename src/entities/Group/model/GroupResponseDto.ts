import { Group } from "../model/group.type"

export type GroupResponseDto = {
  result: 1 | 0,
  data?: Group[]
}