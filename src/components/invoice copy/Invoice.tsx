'use client';
import { FC } from 'react';
import { Page, Text, View, Document, PDFViewer } from '@react-pdf/renderer';
import { styles } from './InvoiceStyle';

export const Invoice: FC = () => {
	const InvoicePDF = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				{/* Header */}
				<View style={styles.header}>
					<View style={styles.headerLeft}>
						<Text style={styles.clinicName}>КӨЗ КЛИНИКАСЫ</Text>
						<Text style={styles.addressText}>
							Дарегибиз: Ош шаары, Ак-Тилек мкр., 2 кеч. 1а/1
						</Text>
						<Text style={styles.contactText}>
							Тел: +996 557 105 105 (WhatsApp)
						</Text>
						<Text style={styles.contactText}> +996 502 105 105</Text>
						<Text style={styles.contactText}>Instagram: dr.damir.clinic</Text>
					</View>

					<View style={styles.headerCenter}>
						<View style={styles.logoContainer}>
							<Text style={styles.logoText}>Dr.Damir</Text>
							<Text style={styles.logoSubtext}>көз клиникасы</Text>
						</View>
					</View>

					<View style={styles.headerRight}>
						<Text style={styles.clinicName}>ГЛАЗНАЯ КЛИНИКА</Text>
						<Text style={styles.addressText}>
							Наш адрес: г. Ош, мкр. Ак-Тилек, ул. 2-ая, 1а/1
						</Text>
						<Text style={styles.contactText}>
							Тел: +996 557 105 105 (WhatsApp)
						</Text>
						<Text style={styles.contactText}> +996 502 105 105</Text>
						<Text style={styles.contactText}>Instagram: dr.damir.clinic</Text>
					</View>
				</View>

				<View style={styles.divider} />

				{/* Title */}
				<View style={styles.titleSection}>
					<Text style={styles.title}>Выписка ВРАЧА-ОФТАЛЬМОЛОГА</Text>
					<Text style={styles.subtitle}>из амбулаторной карты № _______</Text>
				</View>

				{/* Patient Info */}
				<View style={styles.patientInfo}>
					<View style={styles.infoRow}>
						<Text style={styles.label}>ФИО:</Text>
						<View style={styles.underline} />
						<Text style={styles.label}>Дата консультации:</Text>
						<View style={styles.underline} />
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.label}>Дата рождения:</Text>
						<View style={styles.underline} />
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.label}>Жалобы пациента:</Text>
						<View style={styles.underline} />
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.label}>История заболевания глаз:</Text>
						<View style={styles.underline} />
					</View>
				</View>

				{/* Diagnostic Tests */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Диагностические исследования:</Text>
					<Text style={styles.subsectionTitle}>Визометрия:</Text>

					<View style={styles.table}>
						<View style={styles.tableRow}>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>VOD</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>sph</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>cyl</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>ax</Text>
							</View>
						</View>
						<View style={styles.tableRow}>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>VOS</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>sph</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>cyl</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>ax</Text>
							</View>
						</View>
					</View>
				</View>

				{/* Measurements Row */}
				<View style={styles.measurementsRow}>
					<View style={styles.measurementGroup}>
						<Text style={styles.measurementTitle}>Рефрактометр:</Text>
						<View style={styles.smallTable}>
							<View style={styles.tableRow}>
								<View style={styles.smallTableCell}>
									<Text style={styles.tableCellText}>OD</Text>
								</View>
								<View style={styles.smallTableCell}>
									<Text style={styles.tableCellText}>Sph</Text>
								</View>
								<View style={styles.smallTableCell}>
									<Text style={styles.tableCellText}>Cyl</Text>
								</View>
								<View style={styles.smallTableCell}>
									<Text style={styles.tableCellText}>Ax</Text>
								</View>
							</View>
							<View style={styles.tableRow}>
								<View style={styles.smallTableCell}>
									<Text style={styles.tableCellText}>OS</Text>
								</View>
								<View style={styles.smallTableCell}>
									<Text style={styles.tableCellText}>sph</Text>
								</View>
								<View style={styles.smallTableCell}>
									<Text style={styles.tableCellText}>cyl</Text>
								</View>
								<View style={styles.smallTableCell}>
									<Text style={styles.tableCellText}>ax</Text>
								</View>
							</View>
						</View>
					</View>

					<View style={styles.measurementGroup}>
						<Text style={styles.measurementTitle}>Кератометрия:</Text>
						<View style={styles.smallTable}>
							<View style={styles.tableRow}>
								<View style={styles.smallTableCell}>
									<Text style={styles.tableCellText}>K1</Text>
								</View>
							</View>
							<View style={styles.tableRow}>
								<View style={styles.smallTableCell}>
									<Text style={styles.tableCellText}>K2</Text>
								</View>
							</View>
						</View>
					</View>

					<View style={styles.measurementGroup}>
						<Text style={styles.measurementTitle}>Пневмотонометрия:</Text>
						<View style={styles.smallTable}>
							<View style={styles.tableRow}>
								<View style={styles.smallTableCell}>
									<Text style={styles.tableCellText}>IOP OD</Text>
								</View>
							</View>
							<View style={styles.tableRow}>
								<View style={styles.smallTableCell}>
									<Text style={styles.tableCellText}>IOP OS</Text>
								</View>
							</View>
						</View>
					</View>
				</View>

				{/* Biometry */}
				<View style={styles.section}>
					<Text style={styles.measurementTitle}>Биометр:</Text>
					<View style={styles.table}>
						<View style={styles.tableRow}>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>OD</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>ПЗО</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>П/К</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>Хрусталик</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>ОБФ</Text>
							</View>
						</View>
						<View style={styles.tableRow}>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>OS</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>ПЗО</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>П/К</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>Хрусталик</Text>
							</View>
							<View style={styles.tableCell}>
								<Text style={styles.tableCellText}>ОБФ</Text>
							</View>
						</View>
					</View>
				</View>

				{/* Medical Fields */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>
						Лекарственная непереносимость:
					</Text>
					<View style={styles.underline} />
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Офтальмостатус:</Text>
					<Text style={styles.examText}>
						OV: Придаточный аппарат без патологии. Бинокулярное зрение
						устойчивое. Конъюнктива: OU глазная, блестящая. Роговица: проз-я.
						Передняя камера: средней глубины, влага прозрачная. Радужка: рисунок
						четкий, пигментная кайма сохранена. Зрачок: круглый, 3 мм,
						правильной формы. Реакция на свет живая. Хрусталик: помутнен во всех
						слоях. Стекловидное тело: прозрачное. Глазное дно: ДЗН
						блёдно-розовый. Экскавация физиологическая. Сосудистый пучок в
						центре. Артерии умеренно сужены, вены расширены полнокровны, извиты.
						На периферии и в макуле без патологических очагов. По данным ОКТ:
					</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Выполнено:</Text>
					<View style={styles.underline} />
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Офтальмостатус при выписке:</Text>
					<Text style={styles.examText}>
						OV: Придаточный аппарат без патологии. Бинокулярное зрение
						устойчивое. Конъюнктива: OU глазная, блестящая. Роговица: проз-я.
						Передняя камера: средней глубины, влага прозрачная. Радужка: рисунок
						четкий, пигментная кайма сохранена. Зрачок: круглый, 3 мм,
						правильной формы. Реакция на свет живая. Хрусталик: ИОЛ -
						капсулярный мешок. Стекловидное тело: прозрачное. Глазное дно: ДЗН
						блёдно-розовый. Экскавация физиологическая. Сосудистый пучок в
						центре. Артерии умеренно сужены, вены расширены полнокровны, извиты.
						На периферии и в макуле без патологических очагов. По данным ОКТ:
					</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Диагноз при выписке:</Text>
					<View style={styles.underline} />
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Рекомендации:</Text>
					<Text style={styles.recommendationText}>1.</Text>
					<Text style={styles.recommendationText}>2.</Text>
					<Text style={styles.recommendationText}>3.</Text>
				</View>
			</Page>
		</Document>
	);

	return (
		<>
			<PDFViewer width="100%" height="100%">
				<InvoicePDF />
			</PDFViewer>
		</>
	);
};
