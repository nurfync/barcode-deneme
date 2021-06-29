import React, { useRef, useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'
import BarcodeMask from 'react-native-barcode-mask';
const Camera = props => {
    const refCamera = useRef();
    const [isBarcodeRead, setIsBarcodeRead] = useState(false);
    const [barcodeType, setBarcodeType] = useState('');
    const [barcodeValue, setBarcodeValue] = useState('');

    useEffect(() => {
        if (isBarcodeRead) {
            Alert.alert(
                barcodeType,
                barcodeValue,
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            // reset everything
                            setIsBarcodeRead(false);
                            setBarcodeType('');
                            setBarcodeValue('');
                        }
                    }
                ]
            );
        }

    }, [isBarcodeRead, barcodeType, barcodeValue]);

    const onBarcodeRead = event => {
        if (!isBarcodeRead) {
            setIsBarcodeRead(true);
            setBarcodeType(event.type);
            setBarcodeValue(event.data);
        }
    }
    const defaultBarcodeTypes = [];
    return (
        <RNCamera
            ref={rnCameraRef => refCamera.current = rnCameraRef}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            barcodeTypes={isBarcodeRead ? [] : defaultBarcodeTypes}
            onBarCodeRead={onBarcodeRead}
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
        >

            <BarcodeMask />
        </RNCamera>
    );
};

export default Camera;
