import { _ as _sfc_main$2, a as _sfc_main$8 } from "./DashboardNavbar-DXyxgaXz.js";
import { _ as __nuxt_component_3 } from "./Indicator-XBwvUT88.js";
import { _ as _sfc_main$3, a as _sfc_main$6 } from "./SelectMenu-BWx3h-Kw.js";
import { q as useI18n, u as useHead, x as usePhotos, aL as useFetch, aM as setInterval, n as useDayjs, aN as formatBytes, a as __nuxt_component_0, am as _sfc_main$4, B as _sfc_main$5, y as __nuxt_component_0$1, l as __nuxt_component_0$2, aO as _sfc_main$7, E as useRuntimeConfig } from "../server.mjs";
import { defineComponent, ref, watch, nextTick, mergeProps, unref, useSSRContext, withAsyncContext, computed, withCtx, createTextVNode, toDisplayString, createVNode, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { createSingleton } from "tippy.js";
import "./DashboardSidebarToggle-B_He8lib.js";
import "D:/chronoframe-opz/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "es-toolkit";
import "./PopperArrow-Ddp-yvF2.js";
import "./floating-ui.vue-JO3O6Egx.js";
import "./useDirection-C-Y8mi8I.js";
import "D:/chronoframe-opz/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs";
import "./useFormControl-UP-XrpNq.js";
import "./useTypeahead-EUwWhm9r.js";
import "./utils-Dht0ZB_U.js";
import "./VisuallyHiddenInput-8qWid5cT.js";
import "./DismissableLayer-8FDXRr8x.js";
import "./useId-CmnGJZbL.js";
import "./handleAndDispatchCustomEvent-Bk_AVSSo.js";
import "./index-Cm3iXkLk.js";
import "./Input-DTvqSRuX.js";
import "D:/chronoframe-opz/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/chronoframe-opz/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "pinia";
import "vue-router";
import "D:/chronoframe-opz/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/devalue@5.6.1/node_modules/devalue/index.js";
import "D:/chronoframe-opz/node_modules/.pnpm/@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3_/node_modules/@unhead/vue/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/cookie-es@2.0.0/node_modules/cookie-es/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/locale/zh-cn.js";
import "dayjs/locale/zh-hk.js";
import "dayjs/locale/en.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "dayjs/plugin/timezone.js";
import "dayjs/plugin/duration.js";
import "dayjs/plugin/localizedFormat.js";
import "dayjs/plugin/isBetween.js";
import "tailwindcss/colors";
import "@yeger/vue-masonry-wall";
import "tailwind-merge";
import "D:/chronoframe-opz/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "thumbhash";
import "D:/chronoframe-opz/shared/utils/u8array.ts";
import "swiper/vue";
import "swiper/modules";
import "file-type";
import "D:/chronoframe-opz/shared/types/map.ts";
import "dayjs/locale/zh-tw.js";
const COLOR_THEMES = {
  // 默认蓝色主题
  blue: {
    light: ["#ebedf0", "#dae2ef", "#c0ddf9", "#73b3f3", "#3886e1", "#17459e"],
    dark: ["#1f1f22", "#1e334a", "#1d466c", "#1d5689", "#1d69ac", "#1B95D1"]
  },
  // 绿色主题
  green: {
    light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127", "#0d2818"],
    dark: ["#1f1f22", "#0e4429", "#006d32", "#26a641", "#39d353", "#57e86a"]
  },
  // 红色主题
  red: {
    light: ["#ebedf0", "#f9d3d3", "#f2a7a7", "#ec6b6b", "#d63a3a", "#800f0f"],
    dark: ["#1f1f22", "#4a1e1e", "#6c1d1d", "#892121", "#ac2626", "#d13b3b"]
  },
  // 紫色主题
  purple: {
    light: ["#ebedf0", "#e2d6f9", "#c9a9f2", "#a26be5", "#6a35c9", "#2f0b73"],
    dark: ["#1f1f22", "#2c1e4a", "#412d6c", "#583d92", "#764eb8", "#9b6edb"]
  },
  // 橙色主题
  orange: {
    light: ["#ebedf0", "#ffe0c2", "#ffbb80", "#ff944d", "#e66a00", "#803900"],
    dark: ["#1f1f22", "#4a2e1e", "#6c3f1d", "#8c4f1d", "#b05d14", "#e67826"]
  },
  // 青色主题
  teal: {
    light: ["#ebedf0", "#c2f0ed", "#80dfd9", "#4ac6c0", "#229a96", "#0d4c4a"],
    dark: ["#1f1f22", "#1e3a3a", "#1d5656", "#1d6f6c", "#1d8f8c", "#26b3af"]
  },
  // 金色主题
  gold: {
    light: ["#ebedf0", "#fff6c2", "#ffe680", "#ffda4d", "#e6b800", "#7f6a00"],
    dark: ["#1f1f22", "#4a421e", "#6c5e1d", "#8c781d", "#b08f14", "#e6b825"]
  }
};
class Heatmap {
  static DAYS_IN_ONE_YEAR = 365;
  static DAYS_IN_WEEK = 7;
  startDate;
  endDate;
  max;
  _values;
  _firstFullWeekOfMonths;
  _activities;
  _calendar;
  constructor(endDate, values, max, startDate) {
    this.endDate = this.parseDate(endDate);
    if (startDate) {
      this.startDate = this.parseDate(startDate);
    } else {
      this.startDate = this.shiftDate(this.endDate, -365);
    }
    this._values = values || [];
    this.max = max || Math.max(...this._values.map((v) => v.count));
    this._activities = void 0;
    this._calendar = void 0;
    this._firstFullWeekOfMonths = void 0;
  }
  set values(v) {
    this._values = v;
    this.max = Math.max(...v.map((item) => item.count));
    this._activities = void 0;
    this._calendar = void 0;
    this._firstFullWeekOfMonths = void 0;
  }
  get values() {
    return this._values;
  }
  get activities() {
    if (!this._activities) {
      this._activities = /* @__PURE__ */ new Map();
      for (const value of this._values) {
        const date = this.parseDate(value.date);
        const key = this.keyDayParser(date);
        this._activities.set(key, {
          count: value.count,
          colorIndex: this.getColorIndex(value.count)
        });
      }
    }
    return this._activities;
  }
  get weekCount() {
    return Math.ceil(this.getDaysCount() / Heatmap.DAYS_IN_WEEK);
  }
  get calendar() {
    if (!this._calendar) {
      const calendar = [];
      let week = [];
      const isSpecificYear = this.isExactYearRange();
      if (isSpecificYear) {
        const emptyDaysAtStart = this.getCountEmptyDaysAtStart();
        for (let i = 0; i < emptyDaysAtStart; i++) {
          week.push({
            date: /* @__PURE__ */ new Date(0),
            // Use epoch as placeholder for empty days
            colorIndex: 0,
            count: void 0
          });
        }
      } else {
        const emptyDaysAtStart = this.getCountEmptyDaysAtStart();
        for (let i = 0; i < emptyDaysAtStart; i++) {
          week.push({
            date: /* @__PURE__ */ new Date(0),
            // Use epoch as placeholder for empty days
            colorIndex: 0,
            count: void 0
          });
        }
      }
      const currentDate = new Date(this.startDate);
      while (currentDate <= this.endDate) {
        const key = this.keyDayParser(currentDate);
        const activity = this.activities.get(key);
        week.push({
          date: new Date(currentDate),
          count: activity?.count,
          colorIndex: activity?.colorIndex || 0
        });
        if (week.length === Heatmap.DAYS_IN_WEEK) {
          calendar.push(week);
          week = [];
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      if (isSpecificYear) {
        const emptyDaysAtEnd = this.getCountEmptyDaysAtEnd();
        for (let i = 0; i < emptyDaysAtEnd; i++) {
          week.push({
            date: /* @__PURE__ */ new Date(0),
            // Use epoch as placeholder for empty days
            colorIndex: 0,
            count: void 0
          });
        }
      } else {
        const emptyDaysAtEnd = this.getCountEmptyDaysAtEnd();
        const nextDate = new Date(currentDate);
        for (let i = 0; i < emptyDaysAtEnd; i++) {
          week.push({
            date: new Date(nextDate),
            colorIndex: 0
          });
          nextDate.setDate(nextDate.getDate() + 1);
        }
      }
      if (week.length > 0) {
        calendar.push(week);
      }
      this._calendar = calendar;
    }
    return this._calendar;
  }
  get firstFullWeekOfMonths() {
    if (!this._firstFullWeekOfMonths) {
      const months = [];
      const calendar = this.calendar;
      for (let weekIndex = 0; weekIndex < calendar.length; weekIndex++) {
        const week = calendar[weekIndex];
        if (week && week.length > 0) {
          for (const day of week) {
            if (day.date.getTime() > 0 && day.date.getDate() === 1) {
              const month = day.date.getMonth();
              const existingMonth = months.find((m) => m.value === month);
              if (!existingMonth) {
                months.push({
                  value: month,
                  index: weekIndex
                });
              }
            }
          }
        }
      }
      months.sort((a, b) => a.value - b.value);
      this._firstFullWeekOfMonths = months;
    }
    return this._firstFullWeekOfMonths;
  }
  getColorIndex(count) {
    if (!count || count === 0) return 0;
    if (count >= this.max) return 4;
    const step = this.max / 4;
    if (count <= step) return 1;
    if (count <= step * 2) return 2;
    if (count <= step * 3) return 3;
    return 4;
  }
  getCountEmptyDaysAtStart() {
    return this.startDate.getDay();
  }
  getCountEmptyDaysAtEnd() {
    const remainingDays = this.getDaysCount() % Heatmap.DAYS_IN_WEEK;
    return remainingDays === 0 ? 0 : Heatmap.DAYS_IN_WEEK - remainingDays;
  }
  getDaysCount() {
    return Math.ceil(
      (this.endDate.getTime() - this.startDate.getTime()) / (1e3 * 60 * 60 * 24)
    ) + 1;
  }
  isExactYearRange() {
    const startYear = this.startDate.getFullYear();
    const endYear = this.endDate.getFullYear();
    return startYear === endYear && this.startDate.getMonth() === 0 && // January
    this.startDate.getDate() === 1 && // 1st day
    this.endDate.getMonth() === 11 && // December
    this.endDate.getDate() === 31;
  }
  shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  parseDate(date) {
    if (typeof date === "string") {
      return new Date(date);
    }
    return new Date(date);
  }
  keyDayParser(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
}
const BASE_SQUARE_SIZE = 10;
const DAYS_IN_WEEK = 7;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CalendarHeatmap",
  __ssrInlineRender: true,
  props: {
    endDate: {},
    values: {},
    max: { default: void 0 },
    rangeColor: { default: void 0 },
    locale: { default: void 0 },
    tooltip: { type: Boolean, default: true },
    tooltipUnit: { default: "contributions" },
    tooltipFormatter: { type: Function, default: void 0 },
    vertical: { type: Boolean, default: false },
    tooltipNoDataFormatter: { type: Function, default: void 0 },
    round: { default: 0 },
    darkMode: { type: Boolean, default: false },
    startDate: { default: void 0 },
    theme: { default: "blue" }
  },
  emits: ["dayClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const DEFAULT_LOCALE = {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      on: "on",
      less: "Less",
      more: "More"
    };
    const SQUARE_BORDER_SIZE = BASE_SQUARE_SIZE / 5;
    const SQUARE_SIZE = BASE_SQUARE_SIZE + SQUARE_BORDER_SIZE;
    const LEFT_SECTION_WIDTH = Math.ceil(BASE_SQUARE_SIZE * 2.5);
    const RIGHT_SECTION_WIDTH = SQUARE_SIZE * 3;
    const TOP_SECTION_HEIGHT = BASE_SQUARE_SIZE + BASE_SQUARE_SIZE / 2;
    const BOTTOM_SECTION_HEIGHT = BASE_SQUARE_SIZE + BASE_SQUARE_SIZE / 2;
    const yearWrapperTransform = `translate(${LEFT_SECTION_WIDTH}, ${TOP_SECTION_HEIGHT})`;
    ref(null);
    const now = ref(/* @__PURE__ */ new Date());
    const heatmap = ref(
      new Heatmap(
        props.endDate,
        props.values,
        props.max,
        props.startDate
      )
    );
    const width = ref(0);
    const height = ref(0);
    const viewbox = ref("0 0 0 0");
    const legendViewbox = ref("0 0 0 0");
    const daysLabelWrapperTransform = ref("");
    const monthsLabelWrapperTransform = ref("");
    const legendWrapperTransform = ref("");
    const lo = ref(DEFAULT_LOCALE);
    const rangeColor = ref(
      props.rangeColor || [
        ...props.darkMode ? COLOR_THEMES[props.theme].dark : COLOR_THEMES[props.theme].light
      ]
    );
    const tippyInstances = /* @__PURE__ */ new Map();
    let tippySingleton;
    function initTippy() {
      tippyInstances.clear();
      if (tippySingleton) {
        tippySingleton.setInstances(Array.from(tippyInstances.values()));
      } else {
        tippySingleton = createSingleton(Array.from(tippyInstances.values()), {
          overrides: [],
          moveTransition: "transform 0.1s ease-out",
          allowHTML: true
        });
      }
    }
    function getWeekPosition(index) {
      if (props.vertical) {
        return `translate(0, ${SQUARE_SIZE * heatmap.value.weekCount - (index + 1) * SQUARE_SIZE})`;
      }
      return `translate(${index * SQUARE_SIZE}, 0)`;
    }
    function getDayPosition(index) {
      if (props.vertical) {
        return `translate(${index * SQUARE_SIZE}, 0)`;
      }
      return `translate(0, ${index * SQUARE_SIZE})`;
    }
    function getMonthLabelPosition(month) {
      const calendar = heatmap.value.calendar;
      let exactPosition = month.index * SQUARE_SIZE;
      const week = calendar[month.index];
      if (week && week.length > 0) {
        for (let dayIndex = 0; dayIndex < week.length; dayIndex++) {
          const day = week[dayIndex];
          if (day && day.date.getTime() > 0 && day.date.getDate() === 1 && day.date.getMonth() === month.value) {
            if (props.vertical) {
              exactPosition = SQUARE_SIZE * heatmap.value.weekCount - SQUARE_SIZE * month.index - SQUARE_SIZE / 4;
            } else {
              exactPosition = month.index * SQUARE_SIZE;
            }
            break;
          }
        }
      }
      if (props.vertical) {
        return {
          x: 3,
          y: exactPosition
        };
      }
      return {
        x: exactPosition,
        y: SQUARE_SIZE - SQUARE_BORDER_SIZE
      };
    }
    watch(
      [() => props.rangeColor, () => props.darkMode, () => props.theme],
      ([rc, dm, theme]) => {
        rangeColor.value = rc || [
          ...dm ? COLOR_THEMES[theme].dark : COLOR_THEMES[theme].light
        ];
      }
    );
    watch(
      () => props.vertical,
      (v) => {
        if (v) {
          width.value = LEFT_SECTION_WIDTH + SQUARE_SIZE * DAYS_IN_WEEK + RIGHT_SECTION_WIDTH;
          height.value = TOP_SECTION_HEIGHT + SQUARE_SIZE * heatmap.value.weekCount + SQUARE_BORDER_SIZE;
          daysLabelWrapperTransform.value = `translate(${LEFT_SECTION_WIDTH}, 0)`;
          monthsLabelWrapperTransform.value = `translate(0, ${TOP_SECTION_HEIGHT})`;
        } else {
          width.value = LEFT_SECTION_WIDTH + SQUARE_SIZE * heatmap.value.weekCount + SQUARE_BORDER_SIZE;
          height.value = TOP_SECTION_HEIGHT + SQUARE_SIZE * DAYS_IN_WEEK;
          daysLabelWrapperTransform.value = `translate(0, ${TOP_SECTION_HEIGHT})`;
          monthsLabelWrapperTransform.value = `translate(${LEFT_SECTION_WIDTH}, 0)`;
        }
      },
      { immediate: true }
    );
    watch([width, height], ([w, h]) => viewbox.value = `0 0 ${w} ${h}`, {
      immediate: true
    });
    watch(
      [width, height, rangeColor],
      ([w, h, rc]) => {
        legendWrapperTransform.value = props.vertical ? `translate(${LEFT_SECTION_WIDTH + SQUARE_SIZE * DAYS_IN_WEEK}, ${TOP_SECTION_HEIGHT})` : `translate(${w - SQUARE_SIZE * rc.length - 30}, ${h - BOTTOM_SECTION_HEIGHT})`;
      },
      { immediate: true }
    );
    watch(
      () => props.locale,
      (l) => {
        lo.value = l ? { ...DEFAULT_LOCALE, ...l } : DEFAULT_LOCALE;
      },
      { immediate: true }
    );
    watch(
      rangeColor,
      (rc) => {
        legendViewbox.value = `0 0 ${BASE_SQUARE_SIZE * (rc.length + 1)} ${BASE_SQUARE_SIZE}`;
      },
      { immediate: true }
    );
    watch(
      [
        () => props.values,
        () => props.tooltipUnit,
        () => props.tooltipFormatter,
        () => props.tooltipNoDataFormatter,
        () => props.max,
        () => props.startDate,
        () => props.endDate,
        rangeColor
      ],
      () => {
        heatmap.value = new Heatmap(
          props.endDate,
          props.values,
          props.max,
          props.startDate
        );
        tippyInstances.forEach((item) => item.destroy());
        nextTick(initTippy);
      }
    );
    const curRangeColor = rangeColor;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { vch__container: true, "dark-mode": __props.darkMode }
      }, _attrs))}><svg class="vch__wrapper"${ssrRenderAttr("viewBox", unref(viewbox))}><g class="vch__months__labels__wrapper"${ssrRenderAttr("transform", unref(monthsLabelWrapperTransform))}><!--[-->`);
      ssrRenderList(unref(heatmap).firstFullWeekOfMonths, (month, index) => {
        _push(`<text class="vch__month__label"${ssrRenderAttr("x", getMonthLabelPosition(month).x)}${ssrRenderAttr("y", getMonthLabelPosition(month).y)}>${ssrInterpolate(unref(lo).months[month.value])}</text>`);
      });
      _push(`<!--]--></g><g class="vch__days__labels__wrapper"${ssrRenderAttr("transform", unref(daysLabelWrapperTransform))}><text class="vch__day__label"${ssrRenderAttr("x", __props.vertical ? SQUARE_SIZE : 0)}${ssrRenderAttr("y", __props.vertical ? SQUARE_SIZE - SQUARE_BORDER_SIZE : 20)}>${ssrInterpolate(unref(lo).days[1])}</text><text class="vch__day__label"${ssrRenderAttr("x", __props.vertical ? SQUARE_SIZE * 3 : 0)}${ssrRenderAttr("y", __props.vertical ? SQUARE_SIZE - SQUARE_BORDER_SIZE : 44)}>${ssrInterpolate(unref(lo).days[3])}</text><text class="vch__day__label"${ssrRenderAttr("x", __props.vertical ? SQUARE_SIZE * 5 : 0)}${ssrRenderAttr("y", __props.vertical ? SQUARE_SIZE - SQUARE_BORDER_SIZE : 69)}>${ssrInterpolate(unref(lo).days[5])}</text></g>`);
      if (__props.vertical) {
        _push(`<g class="vch__legend__wrapper"${ssrRenderAttr("transform", unref(legendWrapperTransform))}><text${ssrRenderAttr("x", SQUARE_SIZE * 1.25)} y="8">${ssrInterpolate(unref(lo).less)}</text><!--[-->`);
        ssrRenderList(unref(curRangeColor), (color, index) => {
          _push(`<rect${ssrRenderAttr("rx", __props.round)}${ssrRenderAttr("ry", __props.round)} style="${ssrRenderStyle({ fill: color })}"${ssrRenderAttr("width", SQUARE_SIZE - SQUARE_BORDER_SIZE)}${ssrRenderAttr("height", SQUARE_SIZE - SQUARE_BORDER_SIZE)}${ssrRenderAttr("x", SQUARE_SIZE * 1.75)}${ssrRenderAttr("y", SQUARE_SIZE * (index + 1))}></rect>`);
        });
        _push(`<!--]--><text${ssrRenderAttr("x", SQUARE_SIZE * 1.25)}${ssrRenderAttr("y", SQUARE_SIZE * (unref(curRangeColor).length + 2) - SQUARE_BORDER_SIZE)}>${ssrInterpolate(unref(lo).more)}</text></g>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<g class="vch__year__wrapper"${ssrRenderAttr("transform", yearWrapperTransform)}><!--[-->`);
      ssrRenderList(unref(heatmap).calendar, (week, weekIndex) => {
        _push(`<g class="vch__month__wrapper"${ssrRenderAttr("transform", getWeekPosition(weekIndex))}><!--[-->`);
        ssrRenderList(week, (day, dayIndex) => {
          _push(`<!--[-->`);
          if (day.date.getTime() > 0 && (day.date <= unref(now) || unref(heatmap).isExactYearRange())) {
            _push(`<rect class="vch__day__square"${ssrRenderAttr("rx", __props.round)}${ssrRenderAttr("ry", __props.round)}${ssrRenderAttr("transform", getDayPosition(dayIndex))}${ssrRenderAttr("width", SQUARE_SIZE - SQUARE_BORDER_SIZE)}${ssrRenderAttr("height", SQUARE_SIZE - SQUARE_BORDER_SIZE)} style="${ssrRenderStyle({ fill: unref(curRangeColor)[day.colorIndex] })}"${ssrRenderAttr("data-week-index", weekIndex)}${ssrRenderAttr("data-day-index", dayIndex)}></rect>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></g>`);
      });
      _push(`<!--]--></g></svg><div class="vch__legend">`);
      ssrRenderSlot(_ctx.$slots, "legend", {}, () => {
        _push(`<div class="vch__legend-left">`);
        ssrRenderSlot(_ctx.$slots, "vch__legend-left", {}, null, _push, _parent);
        _push(`</div><div class="vch__legend-right">`);
        ssrRenderSlot(_ctx.$slots, "legend-right", {}, () => {
          _push(`<div class="vch__legend"><div>${ssrInterpolate(unref(lo).less)}</div>`);
          if (!__props.vertical) {
            _push(`<svg class="vch__external-legend-wrapper"${ssrRenderAttr("viewBox", unref(legendViewbox))}${ssrRenderAttr("height", SQUARE_SIZE - SQUARE_BORDER_SIZE)}><g class="vch__legend__wrapper"><!--[-->`);
            ssrRenderList(unref(curRangeColor), (color, index) => {
              _push(`<rect${ssrRenderAttr("rx", __props.round)}${ssrRenderAttr("ry", __props.round)} style="${ssrRenderStyle({ fill: color })}"${ssrRenderAttr("width", SQUARE_SIZE - SQUARE_BORDER_SIZE)}${ssrRenderAttr("height", SQUARE_SIZE - SQUARE_BORDER_SIZE)}${ssrRenderAttr("x", SQUARE_SIZE * index)}></rect>`);
            });
            _push(`<!--]--></g></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div>${ssrInterpolate(unref(lo).more)}</div></div>`);
        }, _push, _parent);
        _push(`</div>`);
      }, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/CalendarHeatmap/CalendarHeatmap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$1, { __name: "CalendarHeatmap" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t: $t } = useI18n();
    useHead({
      title: $t("title.dashboard")
    });
    const dayjs = useDayjs();
    const config = useRuntimeConfig();
    const { photos } = usePhotos();
    const { data: dashboardStats, refresh: refreshStats } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/system/stats", "$LfO9GtariX")), __temp = await __temp, __restore(), __temp);
    ref(false);
    const selectedYear = ref("recent");
    setInterval();
    const systemStatus = computed(() => {
      if (!dashboardStats.value) return "unknown";
      const memoryUsage = dashboardStats.value.memory ? dashboardStats.value.memory.used / dashboardStats.value.memory.total * 100 : 0;
      if (memoryUsage > 90) return "critical";
      if (memoryUsage > 70) return "warning";
      return "healthy";
    });
    const availableYears = computed(() => {
      if (!photos.value || photos.value.length === 0) return [];
      const years = /* @__PURE__ */ new Set();
      photos.value.forEach((photo) => {
        if (photo.dateTaken) {
          const year = dayjs(photo.dateTaken).year();
          years.add(year);
        }
      });
      return Array.from(years).sort((a, b) => b - a);
    });
    const heatmapData = computed(() => {
      if (!photos.value || photos.value.length === 0) return [];
      const dateCountMap = /* @__PURE__ */ new Map();
      let start, end;
      if (selectedYear.value === "recent") {
        start = dayjs().subtract(1, "year");
        end = dayjs().add(1, "day");
      } else {
        start = dayjs(`${selectedYear.value}-01-01`).startOf("year");
        end = dayjs(`${selectedYear.value}-01-01`).endOf("year");
      }
      photos.value.forEach((photo) => {
        if (!photo.dateTaken) return;
        const photoDate = dayjs(photo.dateTaken);
        if (photoDate.isBetween(start, end, "day", "[]")) {
          const date = photoDate.format("YYYY-MM-DD");
          dateCountMap.set(date, (dateCountMap.get(date) || 0) + 1);
        }
      });
      return Array.from(dateCountMap.entries()).map(([date, count]) => ({
        date,
        count
      }));
    });
    const heatmapStartDate = computed(() => {
      if (selectedYear.value === "recent") {
        return dayjs().subtract(1, "year").toDate();
      }
      return dayjs(`${selectedYear.value}-01-01`).startOf("year").toDate();
    });
    const heatmapEndDate = computed(() => {
      if (selectedYear.value === "recent") {
        return dayjs().add(1, "day").toDate();
      }
      return dayjs(`${selectedYear.value}-01-01`).endOf("year").toDate();
    });
    const yearOptions = computed(() => {
      const options = [
        {
          label: $t("common.heatmap.legend.recentlyYear"),
          value: "recent"
        }
      ];
      availableYears.value.forEach((year) => {
        options.push({ label: year.toString(), value: year });
      });
      return options;
    });
    const onShareSite = () => {
      const discussionParams = new URLSearchParams({
        category: "showcases",
        title: `Show: ${config.public.app.title}`,
        body: `## Description / Motto

${config.public.app.slogan}

## URL

[${(void 0).location.origin}](${(void 0).location.origin})`
      });
      (void 0).open(
        `https://github.com/HoshinoSuzumi/chronoframe/discussions/new?${discussionParams}`,
        "_blank"
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanel = _sfc_main$2;
      const _component_UDashboardNavbar = _sfc_main$8;
      const _component_DashboardIndicator = __nuxt_component_3;
      const _component_UCard = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UBadge = _sfc_main$4;
      const _component_UButton = _sfc_main$5;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_CalendarHeatmap = __nuxt_component_8;
      const _component_USelectMenu = _sfc_main$6;
      const _component_Icon = __nuxt_component_0$2;
      const _component_UProgress = _sfc_main$7;
      _push(ssrRenderComponent(_component_UDashboardPanel, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardNavbar, {
              title: unref($t)("dashboard.overview.title")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardNavbar, {
                title: unref($t)("dashboard.overview.title")
              }, null, 8, ["title"])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-6"${_scopeId}><div class="grid grid-cols-2 lg:grid-cols-4 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DashboardIndicator, {
              title: unref($t)("dashboard.overview.indicator.totalPhotos"),
              icon: "tabler:photo",
              color: "blue",
              value: unref(dashboardStats)?.photos?.total || 0,
              clickable: "",
              onClick: ($event) => _ctx.$router.push("/dashboard/photos")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DashboardIndicator, {
              title: unref($t)("dashboard.overview.indicator.thisMonth"),
              icon: "tabler:photo-plus",
              color: "green",
              value: unref(dashboardStats)?.photos?.thisMonth || 0
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DashboardIndicator, {
              title: unref($t)("dashboard.overview.indicator.queueStatus.title"),
              icon: "tabler:loader",
              color: "purple",
              value: (unref(dashboardStats)?.workerPool?.activeWorkers || 0) > 0 ? unref($t)("dashboard.overview.indicator.queueStatus.processing") : unref($t)("dashboard.overview.indicator.queueStatus.pending"),
              clickable: "",
              onClick: ($event) => _ctx.$router.push("/dashboard/queue")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DashboardIndicator, {
              title: unref($t)("dashboard.overview.indicator.storageUsage"),
              icon: "tabler:database",
              color: "blue",
              value: ("formatBytes" in _ctx ? _ctx.formatBytes : unref(formatBytes))(unref(dashboardStats)?.storage?.totalSize || 0)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-lg font-semibold pb-1.5"${_scopeId2}> 🌍 ${ssrInterpolate(unref($t)("dashboard.overview.section.runtimeInfo.title"))}</h2>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-lg font-semibold pb-1.5" }, " 🌍 " + toDisplayString(unref($t)("dashboard.overview.section.runtimeInfo.title")), 1)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-2 md:grid-cols-4 gap-4"${_scopeId2}><div${_scopeId2}><p class="text-sm text-neutral-500 dark:text-neutral-400"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.overview.section.runtimeInfo.version"))}</p>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    class: "text-lg font-bold hover:text-primary",
                    target: "_blank",
                    external: "",
                    to: `https://github.com/HoshinoSuzumi/chronoframe/releases/tag/v${_ctx.$config.public.VERSION}`
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` v${ssrInterpolate(_ctx.$config.public.VERSION)}`);
                      } else {
                        return [
                          createTextVNode(" v" + toDisplayString(_ctx.$config.public.VERSION), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><p class="text-sm text-neutral-500 dark:text-neutral-400"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.overview.section.runtimeInfo.uptime"))}</p><p class="text-lg font-bold"${_scopeId2}>${ssrInterpolate(unref(dashboardStats)?.uptime ? _ctx.$dayjs.duration(unref(dashboardStats).uptime, "seconds").humanize() : "-")}</p></div><div${_scopeId2}><p class="text-sm text-neutral-500 dark:text-neutral-400"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.overview.section.runtimeInfo.environment"))}</p>`);
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: unref(dashboardStats)?.runningOn === "docker" ? "info" : "success",
                    variant: "soft"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)(
                          `dashboard.overview.section.runtimeInfo.systems.${unref(dashboardStats)?.runningOn || "unknown"}`
                        ))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)(
                            `dashboard.overview.section.runtimeInfo.systems.${unref(dashboardStats)?.runningOn || "unknown"}`
                          )), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><p class="text-sm text-neutral-500 dark:text-neutral-400"${_scopeId2}> Share Your Site </p><p class="text-lg font-bold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    external: "",
                    variant: "subtle",
                    size: "xs",
                    color: "info",
                    "trailing-icon": "tabler:external-link",
                    onClick: onShareSite
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 分享你的站点 `);
                      } else {
                        return [
                          createTextVNode(" 分享你的站点 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm text-neutral-500 dark:text-neutral-400" }, toDisplayString(unref($t)("dashboard.overview.section.runtimeInfo.version")), 1),
                        createVNode(_component_NuxtLink, {
                          class: "text-lg font-bold hover:text-primary",
                          target: "_blank",
                          external: "",
                          to: `https://github.com/HoshinoSuzumi/chronoframe/releases/tag/v${_ctx.$config.public.VERSION}`
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" v" + toDisplayString(_ctx.$config.public.VERSION), 1)
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm text-neutral-500 dark:text-neutral-400" }, toDisplayString(unref($t)("dashboard.overview.section.runtimeInfo.uptime")), 1),
                        createVNode("p", { class: "text-lg font-bold" }, toDisplayString(unref(dashboardStats)?.uptime ? _ctx.$dayjs.duration(unref(dashboardStats).uptime, "seconds").humanize() : "-"), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm text-neutral-500 dark:text-neutral-400" }, toDisplayString(unref($t)("dashboard.overview.section.runtimeInfo.environment")), 1),
                        createVNode(_component_UBadge, {
                          color: unref(dashboardStats)?.runningOn === "docker" ? "info" : "success",
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref($t)(
                              `dashboard.overview.section.runtimeInfo.systems.${unref(dashboardStats)?.runningOn || "unknown"}`
                            )), 1)
                          ]),
                          _: 1
                        }, 8, ["color"])
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm text-neutral-500 dark:text-neutral-400" }, " Share Your Site "),
                        createVNode("p", { class: "text-lg font-bold" }, [
                          createVNode(_component_UButton, {
                            external: "",
                            variant: "subtle",
                            size: "xs",
                            color: "info",
                            "trailing-icon": "tabler:external-link",
                            onClick: onShareSite
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 分享你的站点 ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 lg:grid-cols-5 gap-4"${_scopeId}><div class="lg:col-span-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="heatmap-container"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {
                    placeholder: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center justify-center h-[164.5px]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "svg-spinners:180-ring-with-bg",
                          class: "size-8 opacity-50",
                          mode: "svg"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-center h-[164.5px]" }, [
                            createVNode(_component_Icon, {
                              name: "svg-spinners:180-ring-with-bg",
                              class: "size-8 opacity-50",
                              mode: "svg"
                            })
                          ])
                        ];
                      }
                    })
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "heatmap-container" }, [
                      createVNode(_component_ClientOnly, null, {
                        placeholder: withCtx(() => [
                          createVNode("div", { class: "flex items-center justify-center h-[164.5px]" }, [
                            createVNode(_component_Icon, {
                              name: "svg-spinners:180-ring-with-bg",
                              class: "size-8 opacity-50",
                              mode: "svg"
                            })
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_CalendarHeatmap, {
                            theme: "blue",
                            values: unref(heatmapData),
                            "start-date": unref(heatmapStartDate),
                            "end-date": unref(heatmapEndDate),
                            round: 3,
                            "tooltip-formatter": (item) => {
                              return unref($t)("common.heatmap.tooltip.data", [
                                _ctx.$dayjs(item.date).format("LL"),
                                item.count || 0
                              ]);
                            },
                            "tooltip-no-data-formatter": (date) => unref($t)("common.heatmap.tooltip.noData", [
                              _ctx.$dayjs(date).format("LL")
                            ]),
                            locale: {
                              months: [
                                unref($t)("common.months.jan"),
                                unref($t)("common.months.feb"),
                                unref($t)("common.months.mar"),
                                unref($t)("common.months.apr"),
                                unref($t)("common.months.may"),
                                unref($t)("common.months.jun"),
                                unref($t)("common.months.jul"),
                                unref($t)("common.months.aug"),
                                unref($t)("common.months.sep"),
                                unref($t)("common.months.oct"),
                                unref($t)("common.months.nov"),
                                unref($t)("common.months.dec")
                              ],
                              days: [
                                unref($t)("common.days.sun"),
                                unref($t)("common.days.mon"),
                                unref($t)("common.days.tue"),
                                unref($t)("common.days.wed"),
                                unref($t)("common.days.thu"),
                                unref($t)("common.days.fri"),
                                unref($t)("common.days.sat")
                              ],
                              less: unref($t)("common.heatmap.legend.less"),
                              more: unref($t)("common.heatmap.legend.more")
                            },
                            "dark-mode": _ctx.$colorMode.value === "dark"
                          }, {
                            "vch__legend-left": withCtx(() => [
                              createVNode(_component_USelectMenu, {
                                modelValue: unref(selectedYear),
                                "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                                items: unref(yearOptions),
                                disabled: unref(yearOptions).length <= 1,
                                "search-input": false,
                                "value-key": "value",
                                size: "xs",
                                variant: "soft",
                                class: "w-24"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                            ]),
                            _: 1
                          }, 8, ["values", "start-date", "end-date", "tooltip-formatter", "tooltip-no-data-formatter", "locale", "dark-mode"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="lg:col-span-2 w-full space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="font-semibold pb-1.5"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.overview.section.memory.title"))}</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "font-semibold pb-1.5" }, toDisplayString(unref($t)("dashboard.overview.section.memory.title")), 1)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UProgress, {
                    "model-value": unref(dashboardStats)?.memory ? Math.round(
                      unref(dashboardStats).memory.used / unref(dashboardStats).memory.total * 100
                    ) : 0,
                    color: unref(systemStatus) === "healthy" ? "success" : unref(systemStatus) === "warning" ? "warning" : unref(systemStatus) === "critical" ? "error" : "neutral",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex justify-between text-sm"${_scopeId2}><div class="text-xs text-neutral-500 dark:text-neutral-400"${_scopeId2}>${ssrInterpolate(unref(dashboardStats)?.memory ? `${Math.round(unref(dashboardStats).memory.used / 1024 / 1024 / 1024 * 100) / 100}GB / ${Math.round(unref(dashboardStats).memory.total / 1024 / 1024 / 1024 * 100) / 100}GB` : "memory info not available")}</div><span${_scopeId2}>${ssrInterpolate(unref(dashboardStats)?.memory ? Math.round(
                    unref(dashboardStats).memory.used / unref(dashboardStats).memory.total * 100
                  ) : 0)}% </span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_UProgress, {
                        "model-value": unref(dashboardStats)?.memory ? Math.round(
                          unref(dashboardStats).memory.used / unref(dashboardStats).memory.total * 100
                        ) : 0,
                        color: unref(systemStatus) === "healthy" ? "success" : unref(systemStatus) === "warning" ? "warning" : unref(systemStatus) === "critical" ? "error" : "neutral",
                        class: "w-full"
                      }, null, 8, ["model-value", "color"]),
                      createVNode("div", { class: "flex justify-between text-sm" }, [
                        createVNode("div", { class: "text-xs text-neutral-500 dark:text-neutral-400" }, toDisplayString(unref(dashboardStats)?.memory ? `${Math.round(unref(dashboardStats).memory.used / 1024 / 1024 / 1024 * 100) / 100}GB / ${Math.round(unref(dashboardStats).memory.total / 1024 / 1024 / 1024 * 100) / 100}GB` : "memory info not available"), 1),
                        createVNode("span", null, toDisplayString(unref(dashboardStats)?.memory ? Math.round(
                          unref(dashboardStats).memory.used / unref(dashboardStats).memory.total * 100
                        ) : 0) + "% ", 1)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="font-semibold pb-1.5"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.overview.section.queue.title"))}</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "font-semibold pb-1.5" }, toDisplayString(unref($t)("dashboard.overview.section.queue.title")), 1)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-1"${_scopeId2}><div class="flex justify-between items-center text-sm"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.overview.section.queue.activeWorkers"))}</span>`);
                  _push3(ssrRenderComponent(_component_UBadge, { variant: "soft" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(dashboardStats)?.workerPool?.activeWorkers || 0)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(dashboardStats)?.workerPool?.activeWorkers || 0), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex justify-between items-center text-sm"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.overview.section.queue.totalWorkers"))}</span>`);
                  _push3(ssrRenderComponent(_component_UBadge, { variant: "soft" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(dashboardStats)?.workerPool?.totalWorkers || 0)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(dashboardStats)?.workerPool?.totalWorkers || 0), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex justify-between items-center text-sm"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.overview.section.queue.totalProcessed"))}</span>`);
                  _push3(ssrRenderComponent(_component_UBadge, { variant: "soft" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(dashboardStats)?.workerPool?.totalProcessed || 0)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(dashboardStats)?.workerPool?.totalProcessed || 0), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex justify-between items-center text-sm"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.overview.section.queue.totalFailed"))}</span>`);
                  _push3(ssrRenderComponent(_component_UBadge, { variant: "soft" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(dashboardStats)?.workerPool?.totalErrors || 0)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(dashboardStats)?.workerPool?.totalErrors || 0), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex justify-between items-center text-sm"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.overview.section.queue.avgSuccessRate"))}</span>`);
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: (unref(dashboardStats)?.workerPool?.averageSuccessRate || 0) > 90 ? "success" : (unref(dashboardStats)?.workerPool?.averageSuccessRate || 0) > 70 ? "warning" : "error",
                    variant: "soft"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(Math.round(
                          unref(dashboardStats)?.workerPool?.averageSuccessRate || 0
                        ))}% `);
                      } else {
                        return [
                          createTextVNode(toDisplayString(Math.round(
                            unref(dashboardStats)?.workerPool?.averageSuccessRate || 0
                          )) + "% ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("div", { class: "flex justify-between items-center text-sm" }, [
                        createVNode("span", null, toDisplayString(unref($t)("dashboard.overview.section.queue.activeWorkers")), 1),
                        createVNode(_component_UBadge, { variant: "soft" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(dashboardStats)?.workerPool?.activeWorkers || 0), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex justify-between items-center text-sm" }, [
                        createVNode("span", null, toDisplayString(unref($t)("dashboard.overview.section.queue.totalWorkers")), 1),
                        createVNode(_component_UBadge, { variant: "soft" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(dashboardStats)?.workerPool?.totalWorkers || 0), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex justify-between items-center text-sm" }, [
                        createVNode("span", null, toDisplayString(unref($t)("dashboard.overview.section.queue.totalProcessed")), 1),
                        createVNode(_component_UBadge, { variant: "soft" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(dashboardStats)?.workerPool?.totalProcessed || 0), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex justify-between items-center text-sm" }, [
                        createVNode("span", null, toDisplayString(unref($t)("dashboard.overview.section.queue.totalFailed")), 1),
                        createVNode(_component_UBadge, { variant: "soft" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(dashboardStats)?.workerPool?.totalErrors || 0), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex justify-between items-center text-sm" }, [
                        createVNode("span", null, toDisplayString(unref($t)("dashboard.overview.section.queue.avgSuccessRate")), 1),
                        createVNode(_component_UBadge, {
                          color: (unref(dashboardStats)?.workerPool?.averageSuccessRate || 0) > 90 ? "success" : (unref(dashboardStats)?.workerPool?.averageSuccessRate || 0) > 70 ? "warning" : "error",
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(Math.round(
                              unref(dashboardStats)?.workerPool?.averageSuccessRate || 0
                            )) + "% ", 1)
                          ]),
                          _: 1
                        }, 8, ["color"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-6" }, [
                createVNode("div", { class: "grid grid-cols-2 lg:grid-cols-4 gap-4" }, [
                  createVNode(_component_DashboardIndicator, {
                    title: unref($t)("dashboard.overview.indicator.totalPhotos"),
                    icon: "tabler:photo",
                    color: "blue",
                    value: unref(dashboardStats)?.photos?.total || 0,
                    clickable: "",
                    onClick: ($event) => _ctx.$router.push("/dashboard/photos")
                  }, null, 8, ["title", "value", "onClick"]),
                  createVNode(_component_DashboardIndicator, {
                    title: unref($t)("dashboard.overview.indicator.thisMonth"),
                    icon: "tabler:photo-plus",
                    color: "green",
                    value: unref(dashboardStats)?.photos?.thisMonth || 0
                  }, null, 8, ["title", "value"]),
                  createVNode(_component_DashboardIndicator, {
                    title: unref($t)("dashboard.overview.indicator.queueStatus.title"),
                    icon: "tabler:loader",
                    color: "purple",
                    value: (unref(dashboardStats)?.workerPool?.activeWorkers || 0) > 0 ? unref($t)("dashboard.overview.indicator.queueStatus.processing") : unref($t)("dashboard.overview.indicator.queueStatus.pending"),
                    clickable: "",
                    onClick: ($event) => _ctx.$router.push("/dashboard/queue")
                  }, null, 8, ["title", "value", "onClick"]),
                  createVNode(_component_DashboardIndicator, {
                    title: unref($t)("dashboard.overview.indicator.storageUsage"),
                    icon: "tabler:database",
                    color: "blue",
                    value: ("formatBytes" in _ctx ? _ctx.formatBytes : unref(formatBytes))(unref(dashboardStats)?.storage?.totalSize || 0)
                  }, null, 8, ["title", "value"])
                ]),
                createVNode(_component_UCard, null, {
                  header: withCtx(() => [
                    createVNode("h2", { class: "text-lg font-semibold pb-1.5" }, " 🌍 " + toDisplayString(unref($t)("dashboard.overview.section.runtimeInfo.title")), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm text-neutral-500 dark:text-neutral-400" }, toDisplayString(unref($t)("dashboard.overview.section.runtimeInfo.version")), 1),
                        createVNode(_component_NuxtLink, {
                          class: "text-lg font-bold hover:text-primary",
                          target: "_blank",
                          external: "",
                          to: `https://github.com/HoshinoSuzumi/chronoframe/releases/tag/v${_ctx.$config.public.VERSION}`
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" v" + toDisplayString(_ctx.$config.public.VERSION), 1)
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm text-neutral-500 dark:text-neutral-400" }, toDisplayString(unref($t)("dashboard.overview.section.runtimeInfo.uptime")), 1),
                        createVNode("p", { class: "text-lg font-bold" }, toDisplayString(unref(dashboardStats)?.uptime ? _ctx.$dayjs.duration(unref(dashboardStats).uptime, "seconds").humanize() : "-"), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm text-neutral-500 dark:text-neutral-400" }, toDisplayString(unref($t)("dashboard.overview.section.runtimeInfo.environment")), 1),
                        createVNode(_component_UBadge, {
                          color: unref(dashboardStats)?.runningOn === "docker" ? "info" : "success",
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref($t)(
                              `dashboard.overview.section.runtimeInfo.systems.${unref(dashboardStats)?.runningOn || "unknown"}`
                            )), 1)
                          ]),
                          _: 1
                        }, 8, ["color"])
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm text-neutral-500 dark:text-neutral-400" }, " Share Your Site "),
                        createVNode("p", { class: "text-lg font-bold" }, [
                          createVNode(_component_UButton, {
                            external: "",
                            variant: "subtle",
                            size: "xs",
                            color: "info",
                            "trailing-icon": "tabler:external-link",
                            onClick: onShareSite
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 分享你的站点 ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-5 gap-4" }, [
                  createVNode("div", { class: "lg:col-span-3" }, [
                    createVNode(_component_UCard, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "heatmap-container" }, [
                          createVNode(_component_ClientOnly, null, {
                            placeholder: withCtx(() => [
                              createVNode("div", { class: "flex items-center justify-center h-[164.5px]" }, [
                                createVNode(_component_Icon, {
                                  name: "svg-spinners:180-ring-with-bg",
                                  class: "size-8 opacity-50",
                                  mode: "svg"
                                })
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_CalendarHeatmap, {
                                theme: "blue",
                                values: unref(heatmapData),
                                "start-date": unref(heatmapStartDate),
                                "end-date": unref(heatmapEndDate),
                                round: 3,
                                "tooltip-formatter": (item) => {
                                  return unref($t)("common.heatmap.tooltip.data", [
                                    _ctx.$dayjs(item.date).format("LL"),
                                    item.count || 0
                                  ]);
                                },
                                "tooltip-no-data-formatter": (date) => unref($t)("common.heatmap.tooltip.noData", [
                                  _ctx.$dayjs(date).format("LL")
                                ]),
                                locale: {
                                  months: [
                                    unref($t)("common.months.jan"),
                                    unref($t)("common.months.feb"),
                                    unref($t)("common.months.mar"),
                                    unref($t)("common.months.apr"),
                                    unref($t)("common.months.may"),
                                    unref($t)("common.months.jun"),
                                    unref($t)("common.months.jul"),
                                    unref($t)("common.months.aug"),
                                    unref($t)("common.months.sep"),
                                    unref($t)("common.months.oct"),
                                    unref($t)("common.months.nov"),
                                    unref($t)("common.months.dec")
                                  ],
                                  days: [
                                    unref($t)("common.days.sun"),
                                    unref($t)("common.days.mon"),
                                    unref($t)("common.days.tue"),
                                    unref($t)("common.days.wed"),
                                    unref($t)("common.days.thu"),
                                    unref($t)("common.days.fri"),
                                    unref($t)("common.days.sat")
                                  ],
                                  less: unref($t)("common.heatmap.legend.less"),
                                  more: unref($t)("common.heatmap.legend.more")
                                },
                                "dark-mode": _ctx.$colorMode.value === "dark"
                              }, {
                                "vch__legend-left": withCtx(() => [
                                  createVNode(_component_USelectMenu, {
                                    modelValue: unref(selectedYear),
                                    "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                                    items: unref(yearOptions),
                                    disabled: unref(yearOptions).length <= 1,
                                    "search-input": false,
                                    "value-key": "value",
                                    size: "xs",
                                    variant: "soft",
                                    class: "w-24"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                                ]),
                                _: 1
                              }, 8, ["values", "start-date", "end-date", "tooltip-formatter", "tooltip-no-data-formatter", "locale", "dark-mode"])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "lg:col-span-2 w-full space-y-4" }, [
                    createVNode(_component_UCard, null, {
                      header: withCtx(() => [
                        createVNode("h3", { class: "font-semibold pb-1.5" }, toDisplayString(unref($t)("dashboard.overview.section.memory.title")), 1)
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(_component_UProgress, {
                            "model-value": unref(dashboardStats)?.memory ? Math.round(
                              unref(dashboardStats).memory.used / unref(dashboardStats).memory.total * 100
                            ) : 0,
                            color: unref(systemStatus) === "healthy" ? "success" : unref(systemStatus) === "warning" ? "warning" : unref(systemStatus) === "critical" ? "error" : "neutral",
                            class: "w-full"
                          }, null, 8, ["model-value", "color"]),
                          createVNode("div", { class: "flex justify-between text-sm" }, [
                            createVNode("div", { class: "text-xs text-neutral-500 dark:text-neutral-400" }, toDisplayString(unref(dashboardStats)?.memory ? `${Math.round(unref(dashboardStats).memory.used / 1024 / 1024 / 1024 * 100) / 100}GB / ${Math.round(unref(dashboardStats).memory.total / 1024 / 1024 / 1024 * 100) / 100}GB` : "memory info not available"), 1),
                            createVNode("span", null, toDisplayString(unref(dashboardStats)?.memory ? Math.round(
                              unref(dashboardStats).memory.used / unref(dashboardStats).memory.total * 100
                            ) : 0) + "% ", 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UCard, null, {
                      header: withCtx(() => [
                        createVNode("h3", { class: "font-semibold pb-1.5" }, toDisplayString(unref($t)("dashboard.overview.section.queue.title")), 1)
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("div", { class: "flex justify-between items-center text-sm" }, [
                            createVNode("span", null, toDisplayString(unref($t)("dashboard.overview.section.queue.activeWorkers")), 1),
                            createVNode(_component_UBadge, { variant: "soft" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(dashboardStats)?.workerPool?.activeWorkers || 0), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex justify-between items-center text-sm" }, [
                            createVNode("span", null, toDisplayString(unref($t)("dashboard.overview.section.queue.totalWorkers")), 1),
                            createVNode(_component_UBadge, { variant: "soft" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(dashboardStats)?.workerPool?.totalWorkers || 0), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex justify-between items-center text-sm" }, [
                            createVNode("span", null, toDisplayString(unref($t)("dashboard.overview.section.queue.totalProcessed")), 1),
                            createVNode(_component_UBadge, { variant: "soft" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(dashboardStats)?.workerPool?.totalProcessed || 0), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex justify-between items-center text-sm" }, [
                            createVNode("span", null, toDisplayString(unref($t)("dashboard.overview.section.queue.totalFailed")), 1),
                            createVNode(_component_UBadge, { variant: "soft" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(dashboardStats)?.workerPool?.totalErrors || 0), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex justify-between items-center text-sm" }, [
                            createVNode("span", null, toDisplayString(unref($t)("dashboard.overview.section.queue.avgSuccessRate")), 1),
                            createVNode(_component_UBadge, {
                              color: (unref(dashboardStats)?.workerPool?.averageSuccessRate || 0) > 90 ? "success" : (unref(dashboardStats)?.workerPool?.averageSuccessRate || 0) > 70 ? "warning" : "error",
                              variant: "soft"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(Math.round(
                                  unref(dashboardStats)?.workerPool?.averageSuccessRate || 0
                                )) + "% ", 1)
                              ]),
                              _: 1
                            }, 8, ["color"])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
