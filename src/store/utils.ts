import * as _ from 'lodash/fp';

export const shuffle = <T>(elements: T[]) =>
    _.shuffle(
        _.pull(_.head(elements))(elements)
    ).concat(
        _.head(elements)
    );

export const reorder = <T>(elements: T[], from: number, to: number) => {
    const movedElement = elements[from];
    const reordered = _.without([movedElement])(elements);
    reordered.splice(to, 0, movedElement);

    return reordered;
};
