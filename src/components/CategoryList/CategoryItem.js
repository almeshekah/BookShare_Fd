import { Link } from 'react-router-dom';
//styles
import { CategoryWrapper } from './styles';

const CategoryItem = ({ category }) => {

	return (
		<CategoryWrapper>
			<Link to={`/categories/${category.slug}/`}>
				<img alt={category.name} src={category.image} />
			</Link>
			<p>{category.name}</p>
		</CategoryWrapper>
	);
};

export default CategoryItem;
