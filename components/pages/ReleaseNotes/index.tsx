import MainLayout from "../../../layout/MainLayout";
import Changelog from "../../../CHANGELOG.mdx";

const ReleaseNotes = () => {
    return (
        <MainLayout>
            <div className="c-Release-notes">
                <h1>Release notes</h1>
                <div className="c-Release-notes__Changelog">
                    <Changelog />
                </div>
            </div>
        </MainLayout>
    );
};

export default ReleaseNotes;
