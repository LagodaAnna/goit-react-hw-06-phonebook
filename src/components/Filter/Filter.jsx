import Box from '../Box';
import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getChangedFilter } from '../../redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(getChangedFilter);
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <Box mt={5}>
      <Label>
        Filter
        <Input type="text" value={filter} onChange={handleFilter} />
      </Label>
    </Box>
  );
};

export default Filter;
