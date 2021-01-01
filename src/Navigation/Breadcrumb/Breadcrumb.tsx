import * as React from 'react';
import classNames from 'classnames';
import { BreadcrumbContainer } from './BreadcrumbStyle';
import BreadcrumbItem from './BreadcrumbItem';

/** You can add any number of <code> <Breadcrumb.Item /> </code> components as children of the Breadcrumb component, controlling the behavior of an individual breadcrumb item.  */
export const Breadcrumb: Breadcrumb = ({
  className,
  children,
  ...defaultProps
}) => {
  return (
    <BreadcrumbContainer
      className={classNames('aries-breadcrumb', className)}
      {...defaultProps}
    >
      {children}
    </BreadcrumbContainer>
  );
};

type Breadcrumb = React.FunctionComponent<Props> & {
  Item: typeof BreadcrumbItem;
};

Breadcrumb.Item = BreadcrumbItem;

export interface Props
  extends React.ComponentPropsWithoutRef<typeof BreadcrumbContainer> {
  children: React.ReactNode;
}

export default Breadcrumb;
