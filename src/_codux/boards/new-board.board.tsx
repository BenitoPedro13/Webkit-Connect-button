import { ConnectButton } from '@rainbow-me/rainbowkit';
import { createBoard } from '@wixc3/react-board/dist/create-board.js';

export default createBoard({
    name: 'New Board',
    Board: () => <ConnectButton />,
});
