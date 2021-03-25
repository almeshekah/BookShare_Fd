import styled from 'styled-components';

export const CategoryWrapper = styled.div`
	margin: 20px;
	img {
		width: 200px;
		height: 200px;
	}
	p {
		text-align: center;
	}
`;
export const ListWrapper = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	margin-top: 80px;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
