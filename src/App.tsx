import styles from './App.module.scss';
import newBoardBoardClass from './_codux/boards/new-board.board';

const NewBoardBoard = newBoardBoardClass.Board;

function App() {
    return (
        <div className={styles.App}>
            <NewBoardBoard />
        </div>
    );
}
export default App;
