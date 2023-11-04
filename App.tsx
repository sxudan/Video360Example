import * as React from 'react';

import { StyleSheet, Modal } from 'react-native';
import {Video360Mode, Video360Player} from 'react-native-video360';

export default function App() {

  return (
    <Modal style={styles.container}>
      <Video360Player style={{flex: 1}} urlVideo={'https://cdn.bitmovin.com/content/assets/playhouse-vr/progressive.mp4'} modeVideo={Video360Mode.AVPlayerVR}/>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});