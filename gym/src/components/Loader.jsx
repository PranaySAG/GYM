import {Html , useProgress} from '@react-three/drei'

function Loader() {
    const { progress } = useProgress()

  return <Html>{progress} % loaded</Html>
}

export default Loader