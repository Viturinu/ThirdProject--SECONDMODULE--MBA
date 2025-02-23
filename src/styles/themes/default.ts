export const defaultTheme = {
    white: '#fff',

    'gray-100': '#E1E1E6',
    'gray-300': '#C4C4CC',
    'gray-400': '#8D8D99',
    'gray-500': '#7C7C8A',
    'gray-600': '#323238',
    'gray-700': '#29292E',
    'gray-800': '#202024',
    'gray-900': '#121214',

    'green-300': '#00B37E',
    'green-500': '#00875F',
    'green-700': '#015F43',

    'red-300': '#F75A68',
    'red-500': '#AB222E',
    'red-700': '#7A1921',
} as const

/*Isso significa que, em vez de os valores serem inferidos como strings genéricas (string), o TypeScript vai inferir o valor exato de cada chave. Ou seja, ele trata os valores como tipos literais, como '#fff' em vez de string.

Exemplo:

Sem as const, o valor 'white' seria do tipo string.
Com as const, o valor 'white' é tratado como o valor exato '#fff'.*/