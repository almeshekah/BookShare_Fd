import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Components

// Styling
import {
	ItemWrapper,
	GoButtonStyled,
	ButtonWrapper,
	ImgWrapper,
} from '../BookDetail/styles';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/More';

// import BookDetail from "../BookDetail";

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

const DetailDialog = ({ bookId }) => {
	const [open, setOpen] = useState(false);
	const books = useSelector((state) => state.bookReducer.books);
	const book = books.find((book) => book.id === bookId);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<div>
				<MoreIcon
					variant="outlined"
					color="primary"
					onClick={handleClickOpen}
				></MoreIcon>
				<Dialog
					onClose={handleClose}
					aria-labelledby="customized-dialog-title"
					open={open}
				>
					<DialogTitle id="customized-dialog-title" onClose={handleClose}>
						Book Details
					</DialogTitle>
					<DialogContent dividers>
						<Helmet>
							<title>{book.name}</title>
						</Helmet>
						<ItemWrapper>
							<ImgWrapper>
								<img alt={book.name} src={book.image} />
							</ImgWrapper>
							<p>Book Name: {book.name}</p>
							<p>Author: {book.author}</p>
							<p>Type: {book.type}</p>
						</ItemWrapper>
						<Typography gutterBottom>
							Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
							dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
							ac consectetur ac, vestibulum at eros.
						</Typography>
					</DialogContent>
					<DialogActions>
						<Button autoFocus onClick={handleClose} color="primary">
							Save changes
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</>
	);
};

export default DetailDialog;
