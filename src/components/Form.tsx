import { useState } from "react"

const Form: React.FC<FormProps> = ({ watches, setWatches }) => {

  const [form, setForm] = useState<ItemsType>({
    name: '',
    timezone: 0,
  });

  type ItemsType = {
    name: string,
    timezone: number,
  }

  const onChange = (e: { target: { name: string; value: string; }; }) => {
    if (e.target.name === 'timezone') {
      setForm(prev => ({ ...prev, [e.target.name]: Number(e.target.value) }));
    } else {
      setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.name !== '') {
      e.target.reset();
      setForm({
        name: '',
        timezone: 0,
      });

      setWatches([...watches, form]);
    } else {
      alert("Заполните название");
    }

  }

  return (
      <form className="form" onSubmit={onSubmit}>
        <div className="form-name">
          <span>Название</span>
          <input className="form-input form-input-date" type="text" name="name" placeholder="" onChange={onChange}></input>
        </div>
        <div className="form-name">
          <span>Временная зона</span>
          <input className="form-input" type="number" name="timezone" placeholder="" onChange={onChange}></input>
        </div>
        <button className="form-button" type="submit">Добавить</button>
      </form>
  )
}

type FormProps = {
  watches: Item[],
}

type Item = {
  name: string,
  timezone: number
}

export default Form