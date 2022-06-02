declare namespace ReactColorful {
export interface RgbColor {
    r: number;
    g: number;
    b: number;
}
export interface RgbaColor extends RgbColor {
    a: number;
}
export interface HslColor {
    h: number;
    s: number;
    l: number;
}
export interface HslaColor extends HslColor {
    a: number;
}
export interface HsvColor {
    h: number;
    s: number;
    v: number;
}
export interface HsvaColor extends HsvColor {
    a: number;
}
export type ObjectColor = RgbColor | HslColor | HsvColor | RgbaColor | HslaColor | HsvaColor;
export type AnyColor = string | ObjectColor;
export interface ColorModel<T extends AnyColor> {
    defaultColor: T;
    toHsva: (defaultColor: T) => HsvaColor;
    fromHsva: (hsva: HsvaColor) => T;
    equal: (first: T, second: T) => boolean;
}
declare type ColorPickerHTMLAttributes = Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "onChange" | "onChangeCapture">;
export interface ColorPickerBaseProps<T extends AnyColor> extends ColorPickerHTMLAttributes {
    color: T;
    onChange: (newColor: T) => void;
}
declare type ColorInputHTMLAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">;
export interface ColorInputBaseProps extends ColorInputHTMLAttributes {
    color?: string;
    onChange?: (newColor: string) => void;
}
export {};

/// <reference types="react" />
import { ColorInputBaseProps } from "../types";
interface HexColorInputProps extends ColorInputBaseProps {
    /** Enables `#` prefix displaying */
    prefixed?: boolean;
    /** Allows `#rgba` and `#rrggbbaa` color formats */
    alpha?: boolean;
}
export const HexColorInput: (props: HexColorInputProps) => JSX.Element;
export {};

/// <reference types="react" />
import { ColorPickerBaseProps } from "../types";
export const HexColorPicker: (props: Partial<ColorPickerBaseProps<string>>) => JSX.Element;

/// <reference types="react" />
import { ColorPickerBaseProps, HslColor } from "../types";
export const HslColorPicker: (props: Partial<ColorPickerBaseProps<HslColor>>) => JSX.Element;

/// <reference types="react" />
import { ColorPickerBaseProps } from "../types";
export const HslStringColorPicker: (props: Partial<ColorPickerBaseProps<string>>) => JSX.Element;

/// <reference types="react" />
import { ColorPickerBaseProps, HslaColor } from "../types";
export const HslaColorPicker: (props: Partial<ColorPickerBaseProps<HslaColor>>) => JSX.Element;

/// <reference types="react" />
import { ColorPickerBaseProps } from "../types";
export const HslaStringColorPicker: (props: Partial<ColorPickerBaseProps<string>>) => JSX.Element;

/// <reference types="react" />
import { ColorPickerBaseProps, HsvColor } from "../types";
export const HsvColorPicker: (props: Partial<ColorPickerBaseProps<HsvColor>>) => JSX.Element;

/// <reference types="react" />
import { ColorPickerBaseProps } from "../types";
export const HsvStringColorPicker: (props: Partial<ColorPickerBaseProps<string>>) => JSX.Element;

/// <reference types="react" />
import { ColorPickerBaseProps, HsvaColor } from "../types";
export const HsvaColorPicker: (props: Partial<ColorPickerBaseProps<HsvaColor>>) => JSX.Element;

/// <reference types="react" />
import { ColorPickerBaseProps } from "../types";
export const HsvaStringColorPicker: (props: Partial<ColorPickerBaseProps<string>>) => JSX.Element;

/// <reference types="react" />
import { ColorPickerBaseProps, RgbColor } from "../types";
export const RgbColorPicker: (props: Partial<ColorPickerBaseProps<RgbColor>>) => JSX.Element;

/// <reference types="react" />
import { ColorPickerBaseProps } from "../types";
export const RgbStringColorPicker: (props: Partial<ColorPickerBaseProps<string>>) => JSX.Element;

/// <reference types="react" />
import { ColorPickerBaseProps, RgbaColor } from "../types";
export const RgbaColorPicker: (props: Partial<ColorPickerBaseProps<RgbaColor>>) => JSX.Element;

/// <reference types="react" />
import { ColorPickerBaseProps } from "../types";
export const RgbaStringColorPicker: (props: Partial<ColorPickerBaseProps<string>>) => JSX.Element;

/**
 * Returns a nonce hash included by Webpack or the one defined manually by developer.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce
 * https://webpack.js.org/guides/csp/
 */
export const getNonce: () => string | undefined;
/**
 * Signs the style tag with a base64-encoded string (nonce) to conforms to Content Security Policies.
 * This function has to be invoked before any picker is rendered if you aren't using Webpack for CSP.
 */
export const setNonce: (hash: string) => void;
}