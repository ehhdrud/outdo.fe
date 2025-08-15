import * as S from './Dashboard.style.ts';
import LayoutSection from '../../components/common/LayoutSection/LayoutSection';
import SummaryChart from '../../components/SummaryChart/SummaryChart';

const Dashboard = () => {
	const example = () => {};

	return (
		<S.DashboardWrapper>
			<LayoutSection title="Summary">
				<SummaryChart />
			</LayoutSection>
		</S.DashboardWrapper>
	);
};

export default Dashboard;
