import MainLayout from "../../../layout/MainLayout";
import Changelog from "../../../CHANGELOG.mdx";

const ReleaseNotesPage = () => (
    <MainLayout maxBodyWidth>
        <div className="c-Release-notes">
            <h1>Release notes</h1>
            <div className="c-Release-notes__Changelog">
                <Changelog />
            </div>
        </div>
    </MainLayout>
);

export default ReleaseNotesPage;
