import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		backgroundColor: '#FFFFFF',
		padding: 20,
		fontFamily: 'Helvetica'
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginBottom: 10
	},
	headerLeft: {
		flex: 1,
		fontSize: 9
	},
	headerCenter: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerRight: {
		flex: 1,
		alignItems: 'flex-end',
		fontSize: 9
	},
	clinicName: {
		fontSize: 11,
		fontWeight: 'bold',
		marginBottom: 5
	},
	addressText: {
		fontSize: 8,
		marginBottom: 2
	},
	contactText: {
		fontSize: 8,
		marginBottom: 1
	},
	logoContainer: {
		alignItems: 'center',
		padding: 10
	},
	logoText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#1E40AF'
	},
	logoSubtext: {
		fontSize: 8,
		color: '#666'
	},
	divider: {
		height: 1,
		backgroundColor: '#000',
		marginVertical: 10
	},
	titleSection: {
		alignItems: 'center',
		marginBottom: 20
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 5
	},
	subtitle: {
		fontSize: 12
	},
	patientInfo: {
		marginBottom: 15
	},
	infoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8
	},
	label: {
		fontSize: 11,
		marginRight: 10
	},
	underline: {
		flex: 1,
		height: 1,
		backgroundColor: '#000',
		marginHorizontal: 10
	},
	section: {
		marginBottom: 10
	},
	sectionTitle: {
		fontSize: 11,
		fontWeight: 'bold',
		marginBottom: 5
	},
	subsectionTitle: {
		fontSize: 10,
		fontWeight: 'bold',
		marginBottom: 5
	},
	table: {
		borderWidth: 1,
		borderColor: '#000',
		marginBottom: 10
	},
	tableRow: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#000'
	},
	tableCell: {
		flex: 1,
		padding: 5,
		borderRightWidth: 1,
		borderRightColor: '#000',
		minHeight: 25
	},
	tableCellText: {
		fontSize: 9,
		textAlign: 'center'
	},
	measurementsRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15
	},
	measurementGroup: {
		flex: 1,
		marginHorizontal: 5
	},
	measurementTitle: {
		fontSize: 10,
		fontWeight: 'bold',
		marginBottom: 5
	},
	smallTable: {
		borderWidth: 1,
		borderColor: '#000'
	},
	smallTableCell: {
		padding: 3,
		borderRightWidth: 1,
		borderRightColor: '#000',
		minHeight: 20,
		justifyContent: 'center'
	},
	examText: {
		fontSize: 9,
		lineHeight: 1.3,
		textAlign: 'justify'
	},
	recommendationText: {
		fontSize: 10,
		marginBottom: 10
	}
});
