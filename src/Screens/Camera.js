import React, { useRef, useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'
import BarcodeMask from 'react-native-barcode-mask';
const Camera = props => {
    const refCamera = useRef();
    const [isBarcodeRead, setIsBarcodeRead] = useState(false);
    const [barcodeType, setBarcodeType] = useState('');
    const [barcodeValue, setBarcodeValue] = useState('');
    const defaultBarcodeTypes = [];


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


    return (
        <>
            <RNCamera
                style={{
                    flex: 1,
                    backgroundColor: 'pink'
                }}
                // onGoogleVisionBarcodesDetected={barcodeRecognized}
                onBarCodeRead={onBarcodeRead}
                barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                ref={rnCameraRef => refCamera.current = rnCameraRef}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
            >
            </RNCamera>

        </>
    );
};

export default Camera;
