import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';

const Header = () => (
    <header>
        <h1 className={"Header-title ms-font-su ms-fontSize-su"}>Kopiste</h1>

        <MessageBar
            messageBarType={ MessageBarType.warning }
            ariaLabel='開発版の警告'
            >
            α版です。ご使用の際には、自己責任でよろしくお願いします。
        </MessageBar>
    </header>
);

module.exports = Header;