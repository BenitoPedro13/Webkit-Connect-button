import { createBoard } from '@wixc3/react-board';
import { ConnectBtn } from '../../components/connect-btn/connect-btn';

export default createBoard({
    name: 'New Board 1',
    Board: () => (
        <div>
            <ConnectBtn />
        </div>
    ),
});
