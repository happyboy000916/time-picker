/* eslint no-console:0 */

import 'rc-time-picker/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';

import moment from 'moment';

import TimePicker from 'rc-time-picker';

const showSecond = false;
const str = showSecond ? 'h:mm a' : 'h:mm a';

const now = moment().hour(0).minute(0);

function onChange(value) {
  console.log(value && value.format(str));
}

ReactDom.render(
  <TimePicker
    showSecond={showSecond}
    defaultValue={now}
    className="xxx"
    onChange={onChange}
    format={str}
    use12Hours
  />,
  document.getElementById('__react-content')
);
