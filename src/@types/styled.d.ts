import "styled-components"; //importamos este modulo para redeclarar ele
import { defaultTheme } from "../styles/themes/default"; //importanmos para pegar o tipo

type ThemeType = typeof defaultTheme; //pegamos o tipo da constante/objeto que queremos tipar no typescript

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType { } //aqui exportamos a interface extendendo com nossa tipagem (foi assim que a biblioteca instruiu a se fazer)
}