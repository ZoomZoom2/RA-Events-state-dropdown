import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>Домашнее задание «События и состояние»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task task_3 _container'} id={'task3'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>Выпадающий список</h3>
          </header>
          <div className={'task__body task__body_task3'}>
            <Dropdown />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
