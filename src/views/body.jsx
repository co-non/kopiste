import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

const __onConvertButtonClicked = () => {
    alert("aaa")
};

const Body = () => (
    <div>
        <TextField
            label='テキストを入力してください'
            placeholder='変換したいテキストをここに入力してください'
            multiline
            rows={ 6 }
            />
        <div>
            <Toggle
                defaultChecked={ true }
                label='改行を2倍にする'
                onText='On'
                offText='Off'
                />
            <Toggle
                defaultChecked={ true }
                label='「」の前後に改行を追加する'
                onText='On'
                offText='Off'
                />
        </div>
        <Button
            text='変換'
            onClick={__onConvertButtonClicked}
            />
        <TextField
            label='出力'
            placeholder='出力がここに表示されます'
            multiline
            rows={ 6 }
            readOnly={ true }
            />
    </div>
);

module.exports = Body;