import React, { ReactElement, SVGProps } from 'react';

type Nullable<T> = T | null;

export type ReturnComponentType = Nullable<ReactElement>;
export type SvgElementType = React.FC<SVGProps<SVGSVGElement>>;
