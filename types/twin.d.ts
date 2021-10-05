import { css as cssImport } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import styledImport from '@emotion/styled';
import 'twin.macro';

declare module 'twin.macro' {
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSInterpolation;
  }

  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSInterpolation;
  }
}
