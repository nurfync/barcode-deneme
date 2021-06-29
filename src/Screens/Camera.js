import React, { useRef, useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'
import BarcodeMask from 'react-native-barcode-mask';
const Camera = props => {
    const refCamera = useRef();

const barcodeRecognized = ({ barcodes }) => {
    barcodes.forEach(barcode => Alert.alert(barcode.data))

  };
  const defaultBarcodeTypes = [];


    return (
        <>
            <RNCamera
                style={{
                    flex: 1,
                    backgroundColor: 'pink'
                }}
                onGoogleVisionBarcodesDetected={barcodeRecognized}

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
