
import Thumbnail from './Thumbnail';

export default function PictureList(props) {
 
  return (
    <div>
     <Thumbnail picture = {props.pictures[0]}></Thumbnail>
    </div>
  );
}