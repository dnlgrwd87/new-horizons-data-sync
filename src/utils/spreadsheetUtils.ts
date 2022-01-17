export const convertKeyToCamelCase = (key: string) => {
    key = key.replace(/\s/g, '');
    key = key.charAt(0).toLowerCase() + key.slice(1);

    return key;
};

export const parseImageUrl = (value: any) => {
    const regex = /=image\("(.*)"/i;
    const matches = value.match(regex);
    value = matches ? matches[1] : '';
    
    return value;
};
