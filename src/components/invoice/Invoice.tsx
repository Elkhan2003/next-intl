'use client';
import { FC, useRef } from 'react';
import scss from './Invoice.module.scss';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const Invoice: FC = () => {
	const printRef = useRef(null);

	const handleDownloadPDF = async () => {
		const element = printRef.current;
		if (!element) {
			return;
		}

		const canvas = await html2canvas(element, {
			scale: 2
		});
		const data = canvas.toDataURL('image/png');

		const pdf = new jsPDF({
			orientation: 'portrait',
			unit: 'px',
			format: 'a4'
		});

		const imgProperties = pdf.getImageProperties(data);
		const pdfWidth = pdf.internal.pageSize.getWidth();

		const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

		pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
		pdf.save('examplepdf.pdf');
	};

	return (
		<>
			<section ref={printRef} className={scss.Invoice}>
				<div className={scss.content}>
					<div className={scss.header}>
						<div className={scss.leftColumn}>
							<div className={scss.title}>КӨЗ КЛИНИКАСЫ</div>
							<div className={scss.address}>
								<div>Дарегибиз: Ош шаары, Ак-Тилек мкр., 2 кеч. 1а/1</div>
								<div>Тел: +996 557 105 105 (WhatsApp)</div>
								<div>+996 502 105 105</div>
								<div>Instagram: dr.damir.clinic</div>
							</div>
						</div>

						<div className={scss.logo}>
							<div className={scss.logoContainer}>
								<div className={scss.logoIcon}>
									<div className={scss.eye}>
										<div className={scss.eyeball}></div>
									</div>
								</div>
								<div className={scss.logoText}>
									<div className={scss.doctorName}>Dr.Damir</div>
									<div className={scss.subtitle}>көз клиникасы</div>
								</div>
							</div>
						</div>

						<div className={scss.rightColumn}>
							<div className={scss.title}>ГЛАЗНАЯ КЛИНИКА</div>
							<div className={scss.address}>
								<div>Наш адрес: г. Ош, мкр. Ак-Тилек, ул. 2-ая, 1а/1</div>
								<div>Тел: +996 557 105 105 (WhatsApp)</div>
								<div>+996 502 105 105</div>
								<div>Instagram: dr.damir.clinic</div>
							</div>
						</div>
					</div>

					<div className={scss.separator}></div>

					<div className={scss.formTitle}>
						<h2>Выписка ВРАЧА-ОФТАЛЬМОЛОГА</h2>
						<div className={scss.cardNumber}>
							из амбулаторной карты № _______
						</div>
					</div>

					<div className={scss.patientInfo}>
						<div className={scss.infoRow}>
							<div className={scss.field}>
								<label>ФИО:</label>
								<div className={scss.line}></div>
							</div>
							<div className={scss.field}>
								<label>Дата консультации:</label>
								<div className={scss.line}></div>
							</div>
						</div>

						<div className={scss.infoRow}>
							<div className={scss.field}>
								<label>Дата рождения:</label>
								<div className={scss.line}></div>
							</div>
						</div>

						<div className={scss.infoRow}>
							<div className={scss.field}>
								<label>Жалобы пациента:</label>
								<div className={scss.line}></div>
							</div>
						</div>

						<div className={scss.infoRow}>
							<div className={scss.field}>
								<label>История заболевания глаз:</label>
								<div className={scss.line}></div>
							</div>
						</div>
					</div>

					<div className={scss.diagnostics}>
						<div className={scss.sectionTitle}>
							Диагностические исследования:
						</div>
						<div className={scss.sectionTitle}>Визометрия:</div>

						<div className={scss.tables}>
							<table className={scss.visionTable}>
								<tbody>
									<tr>
										<td>VOD</td>
										<td>sph</td>
										<td>cyl</td>
										<td>ax</td>
									</tr>
									<tr>
										<td>VOS</td>
										<td>sph</td>
										<td>cyl</td>
										<td>ax</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className={scss.measurementSection}>
							<div className={scss.measurementGroup}>
								<div className={scss.measurementTitle}>Рефрактометр:</div>
								<table className={scss.measurementTable}>
									<tbody>
										<tr>
											<td>OD</td>
											<td>Sph</td>
											<td>Cyl</td>
											<td>Ax</td>
										</tr>
										<tr>
											<td>OS</td>
											<td>sph</td>
											<td>cyl</td>
											<td>ax</td>
										</tr>
									</tbody>
								</table>
							</div>

							<div className={scss.measurementGroup}>
								<div className={scss.measurementTitle}>Кератометрия:</div>
								<table className={scss.measurementTable}>
									<tbody>
										<tr>
											<td>K1</td>
											<td></td>
										</tr>
										<tr>
											<td>K2</td>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>

							<div className={scss.measurementGroup}>
								<div className={scss.measurementTitle}>Пневмотонометрия:</div>
								<table className={scss.measurementTable}>
									<tbody>
										<tr>
											<td>IOP OD</td>
											<td></td>
										</tr>
										<tr>
											<td>IOP OS</td>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className={scss.biometrySection}>
							<div className={scss.measurementTitle}>Биометр:</div>
							<table className={scss.biometryTable}>
								<tbody>
									<tr>
										<td>OD</td>
										<td>ПЗО</td>
										<td>П/К</td>
										<td>Хрусталик</td>
										<td>ОБФ</td>
									</tr>
									<tr>
										<td>OS</td>
										<td>ПЗО</td>
										<td>П/К</td>
										<td>Хрусталик</td>
										<td>ОБФ</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className={scss.medicalInfo}>
						<div className={scss.field}>
							<label>Лекарственная непереносимость:</label>
							<div className={scss.line}></div>
						</div>

						<div className={scss.field}>
							<label>Офтальмостатус:</label>
							<div className={scss.line}></div>
						</div>

						<div className={scss.statusDescription}>
							<strong>OV:</strong> Придаточный аппарат без патологии.
							Бинокулярное зрение устойчивое. <strong>Конъюнктива:</strong> OU
							глазная, блестящая. <strong>Роговица:</strong> про-я. Передняя
							камера: средней глубины, влага прозрачная.{' '}
							<strong>Радужка:</strong> рисунок четкий, пигментная кайма
							сохранена. <strong>Зрачок:</strong> круглый, 3 мм, правильной
							формы. Реакция на свет живая. <strong>Хрусталик:</strong> помутнен
							во всех слоях. <strong>Стекловидное тело:</strong> прозрачное.{' '}
							<strong>Глазное дно:</strong> ДЗН бледно-розовый. Экскавация
							физиологическая. Сосудистый пучок в центре. Артерии умеренно
							сужены, вены расширены полнокровны, извиты. На периферии и в
							макуле без патологических очагов. <strong>По данным ОКТ:</strong>
						</div>
					</div>

					<div className={scss.conclusion}>
						<div className={scss.field}>
							<label>Выполнено:</label>
							<div className={scss.line}></div>
						</div>

						<div className={scss.field}>
							<label>Офтальмостатус при выписке:</label>
							<div className={scss.line}></div>
						</div>

						<div className={scss.statusDescription}>
							<strong>OV:</strong> Придаточный аппарат без патологии.
							Бинокулярное зрение устойчивое. <strong>Конъюнктива:</strong> OU
							глазная, блестящая. <strong>Роговица:</strong> про-я. Передняя
							камера: средней глубины, влага прозрачная.{' '}
							<strong>Радужка:</strong> рисунок четкий, пигментная кайма
							сохранена. <strong>Зрачок:</strong> круглый, 3 мм, правильной
							формы. Реакция на свет живая. <strong>Хрусталик:</strong> ИОЛ –
							капсульный мешок. <strong>Стекловидное тело:</strong> прозрачное.{' '}
							<strong>Глазное дно:</strong> ДЗН бледно-розовый. Экскавация
							физиологическая. Сосудистый пучок в центре. Артерии умеренно
							сужены, вены расширены полнокровны, извиты. На периферии и в
							макуле без патологических очагов. <strong>По данным ОКТ:</strong>
						</div>
					</div>

					<div className={scss.diagnosis}>
						<div className={scss.field}>
							<label>Диагноз при выписке:</label>
							<div className={scss.line}></div>
						</div>

						<div className={scss.field}>
							<label>Рекомендации:</label>
							<div className={scss.line}></div>
						</div>

						<div className={scss.recommendations}>
							<div className={scss.recommendationItem}>
								<span>1.</span>
								<div className={scss.line}></div>
							</div>
							<div className={scss.recommendationItem}>
								<span>2.</span>
								<div className={scss.line}></div>
							</div>
							<div className={scss.recommendationItem}>
								<span>3.</span>
								<div className={scss.line}></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<button onClick={handleDownloadPDF}>Скачать PDF</button>
		</>
	);
};
