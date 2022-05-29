import type dayjs from "dayjs";
import type { marked } from "marked";
import type { InjectionKey } from "vue";

export const dayjsKey: InjectionKey<typeof dayjs> = Symbol("dayjs");
