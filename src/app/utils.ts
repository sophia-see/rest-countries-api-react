export const toTitleCase = (str: string) => {
    return str?.at(0)?.toUpperCase() + str?.slice(1);
}

export const toSentenceCase = (str: string) => {
    return str.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
}