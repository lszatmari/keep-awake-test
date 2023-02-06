import { useKeepAwake } from 'expo-keep-awake';

const KeepAwake = () => {
  useKeepAwake();

  return (
    <div>
      <h1>This should not sleep!</h1>
    </div>
  )
};

export default KeepAwake;