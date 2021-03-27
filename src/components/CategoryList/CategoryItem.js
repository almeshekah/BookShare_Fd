import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { categoryOfBooks } from '../../store/actions/categoryActions';
//styles
import { CategoryWrapper } from './styles';

const CategoryItem = ({ category }) => {
	const dispatch = useDispatch();

	return (
		<CategoryWrapper>
			<Link to={`/categories/${category.slug}`}>
				<img
					alt={category.name}
					src={category.image}
					onClick={() => dispatch(categoryOfBooks(category.id))}
				/>
			</Link>
			<p>{category.name}</p>
		</CategoryWrapper>
	);
};

export default CategoryItem;
