import classNames from 'classnames';
import React, { Fragment, useState } from 'react';

import './Badge.scss';

const Badge = ({ color, onClick, className }) => (
  <i className={classNames('badge', {[`badge badge--${color}`] : color}, className)} onClick={onClick}></i>
);

export default Badge;
