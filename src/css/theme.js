/**
 * 默认值见 https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less
 */
// 基本单位
module.exports = {
    // 色彩
    // ---
    // 文字色
    "color-text-base": "#383D40",                 // 基本
    // @color-text-base-inverse: #fff;          // 基本 - 反色
    // @color-text-secondary: #a4a9b0;          // 辅助色
    // @color-text-placeholder: #bbb;           // 文本框提示
    // @color-text-disabled: #bbb;              // 失效
    // @color-text-caption: #888;               // 辅助描述
    // @color-text-paragraph: #333;             // 段落
    // @color-link: @brand-primary;             // 链接

    // 背景色
    "fill-base": "#FFFFFF",                           // 组件默认背景
    // @fill-body: #f5f5f9;                        // 页面背景
    // @fill-tap: #ddd;                            // 组件默认背景 - 按下
    // @fill-disabled: #ddd;                       // 通用失效背景
    // @fill-mask: rgba(0, 0, 0, 0.4);              // 遮罩背景
    // @color-icon-base: #ccc;                      // 许多小图标的背景，比如一些小圆点，加减号
    // @fill-grey: #f7f7f7;

    // 透明度
    // @opacity-disabled: 0.3;   // switch checkbox radio 等组件禁用的透明度

    // 全局/品牌色
    "brand-primary": "#1BC573",
    "brand-primary-tap": "#1CBA6C",
    // @brand-success: #1BC573;
    // @brand-warning: #ffc600;
    // @brand-error: #f4333c;
    // @brand-important: #ff5b05;  // 用于小红点
    // @brand-wait: #108ee9;

    // 边框色
    "border-color-base": "#F7FAFA",
    // "border-color-base": "#ddd",

    // 字体尺寸
    // ---
    // @font-size-icontext: 10px;
    // @font-size-caption-sm: 3px;
    "font-size-base": "15px",
    "font-size-subhead": "15px",
    "font-size-caption": "14px",
    "font-size-heading": "15px",

    // 圆角
    // ---
    // @radius-xs: 2px;
    // @radius-sm: 3px;
    "radius-md": "4px",
    // @radius-lg: 7px;
    // @radius-circle: 50%;

    // 边框尺寸
    // ---
    // @border-width-sm: 1PX;
    // @border-width-md: 1PX;
    // @border-width-lg: 2px;

    // 间距
    // ---
    // 水平间距
    // @h-spacing-sm: 5px;
    // @h-spacing-md: 8px;
    "h-spacing-lg": "20px",

    // 垂直间距
    // @v-spacing-xs: 3px;
    // @v-spacing-sm: 6px;
    // @v-spacing-md: 9px;
    // @v-spacing-lg: 15px;
    // @v-spacing-xl: 21px;

    // 高度
    // ---
    // @line-height-base: 1;           // 单行行高
    // @line-height-paragraph: 1.5;    // 多行行高

    // 图标尺寸
    // ---
    // @icon-size-xxs: 15px;
    // @icon-size-xs: 18px;
    // @icon-size-sm: 21px;
    // @icon-size-md: 22px;       // 导航条上的图标、grid的图标大小
    // @icon-size-lg: 36px;

    // 动画缓动
    // ---
    // @ease-in-out-quint: cubic-bezier(.86, 0, .07, 1);

    // 组件变量
    // ---

    // @actionsheet-item-height: 50px;
    // @actionsheet-item-font-size: 18px;

    // button
    "button-height": "48px",
    "button-font-size": "16px",

    // @button-height-sm: 30px;
    // @button-font-size-sm: 13px;

    // @primary-button-fill: @brand-primary;
    // @primary-button-fill-tap: @brand-primary-tap;

    // @ghost-button-color: @brand-primary;    // 同时应用于背景、文字颜色、边框色
    // @ghost-button-fill-tap: fade(@brand-primary, 60%);

    // @warning-button-fill: #e94f4f;
    // @warning-button-fill-tap: #d24747;

    // @link-button-fill-tap: #ddd;
    // @link-button-font-size: 16px;

    // menu
    // @menu-multi-select-btns-height: @button-height;

    // modal
    // "modal-font-size-heading": "16px",
    // "modal-button-font-size": "16px", // 按钮字号
    // @modal-button-height: 50px; // 按钮高度

    // list
    // @list-title-height: 30px;
    // @list-item-height-sm: 35px;
    "list-item-height": "56px",

    // input
    // @input-label-width: 17px;       // InputItem、TextareaItem 文字长度基础值
    "input-font-size": "15px",
    // @input-color-icon: #ccc; // input clear icon 的背景色
    // @input-color-icon-tap: @brand-primary;

    // tabs
    // @tabs-color: @brand-primary;
    // @tabs-height: 43.5px;
    "tabs-font-size-heading": " 16px",
    // @tabs-ink-bar-height: @border-width-lg;

    // segmented-control
    // @segmented-control-color: @brand-primary;  // 同时应用于背景、文字颜色、边框色
    // @segmented-control-height: 27px;
    // @segmented-control-fill-tap: fade(@brand-primary, 0.1);

    // tab-bar
    // @tab-bar-fill: #ebeeef;
    // @tab-bar-height: 50px;

    // toast
    // @toast-fill: rgba(58, 58, 58, 0.9); // toast, activity-indicator 的背景颜色

    // search-bar
    // @search-bar-fill: #efeff4;
    // @search-bar-height: 44px;
    // @search-bar-input-height: 28px;
    // @search-bar-font-size: 15px;
    // @search-color-icon: #bbb; // input search icon 的背景色

    // notice-bar
    // @notice-bar-fill: #fefcec;
    // @notice-bar-height: 36px;
    // @notice-bar-color: #f76a24;

    // switch
    // @switch-fill: #4dd865;
    // @switch-fill-android: @brand-primary;

    // tag
    // @tag-height: 25px;
    // @tag-height-sm: 15px;
    // @tag-color: @brand-primary;

    // keyboard
    // @keyboard-confirm-color: @brand-primary;
    // @keyboard-confirm-tap-color: @brand-primary-tap;

    // picker
    // @option-height: 42px;           // picker 标题的高度

    // z-index
    // @progress-zindex: 2000;
    // @popover-zindex: 1999;
    // @toast-zindex: 1999;
    // @action-sheet-zindex: 1000; // actonsheet 会放到 popup / modal 中
    // @picker-zindex: 1000;
    // @popup-zindex: 999;
    // @modal-zindex: 999; // modal.alert 应该最大，其他应该较小
    // @tabs-pagination-zindex: 999;
}