
import Markdown from 'react-markdown'
import {
	Card as MuiCard, 
	CardContent, 
	Typography, 
	CardMedia, 
	CardActionArea, 
	Grid ,
	// Pagination,
	// PaginationItem
} from '@material-ui/core'

export const Card = ({ 
	name = [],
	categories = [],
	definition = "",
	images = [],
	abbreviation,
	obfuscated = false
}) => {
	// const getTitle = () => {
		// if (obfuscated) return "??????"
		// return `${name} {}`
	// } 
	return (
		<MuiCard key={name} className="Card" variant="outlined" style={{
			// maxWidth:400
		}}>
			<CardActionArea style={{minHeight : 500}}>
			<CardContent>
				<Typography color="text.secondary" variant="h5">
					{obfuscated ? 
						<>??????</> : 
						<>{name} {abbreviation && <span>({abbreviation})</span>}</>
					}
				</Typography>
			</CardContent>
				<CardMedia  style={{ 
					// width : "100%", 
					height: "300px" 
					}} image={images && images[0]} />
			<CardContent>
				<Typography >
					<Markdown children={definition} />
				</Typography>
			</CardContent>
			</CardActionArea>
		</MuiCard>
	)
}