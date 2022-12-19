import React from 'react';

import { Breadcrumb as AntDBreadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';

import { ReturnComponentType } from '@/commonTypes';
import { PAGE, PATH } from '@/constants';

import { NavLinkWrapper } from './styles';

const { HOME } = PAGE;

const Breadcrumb = (): ReturnComponentType => {
  const { pathname } = useLocation();

  const pathnames = pathname.split('/').filter(el => el);

  return (
    <AntDBreadcrumb>
      <AntDBreadcrumb.Item>
        <NavLinkWrapper to={PATH.HOME_PAGE_ROUTE}>{HOME}</NavLinkWrapper>
      </AntDBreadcrumb.Item>
      {pathnames.map((el, index) => (
        <AntDBreadcrumb.Item key={`${el + index}`}>
          <NavLinkWrapper to={`/${el}`}>{el}</NavLinkWrapper>
        </AntDBreadcrumb.Item>
      ))}
    </AntDBreadcrumb>
  );
};

export default Breadcrumb;
