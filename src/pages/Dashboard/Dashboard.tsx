import * as S from './Dashboard.style.ts';
import Achievement from '../../components/Achievement/Achievement';
import LayoutSection from '../../components/common/LayoutSection/LayoutSection';
import SummaryChart from '../../components/SummaryChart/SummaryChart';
import { mockSummaryData } from '../../data/mockSummaryData';

const Dashboard = () => {
	const example = () => {};

	return (
		<S.DashboardWrapper>
			<LayoutSection title="Summary">
				<SummaryChart />
			</LayoutSection>
			<LayoutSection title="Achievement">
				<Achievement />
			</LayoutSection>
		</S.DashboardWrapper>
	);
};

export default Dashboard;
