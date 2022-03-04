import {defineComponent} from 'vue'
import './index.scss'
export default defineComponent({
    name: 'Input',
    setup(props, {emit}) {
        return () => {
            return (
                <div>
                    <input type="text"/>
                </div>
            );
        }
    }
});

