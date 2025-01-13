import { VSCodeButton, VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { memo } from "react"
// import VSCodeButtonLink from "./VSCodeButtonLink"
// import { getOpenRouterAuthUrl } from "./ApiOptions"
// import { vscode } from "../utils/vscode"

interface AnnouncementProps {
	version: string
	hideAnnouncement: () => void
}
/*
You must update the latestAnnouncementId in ClineProvider for new announcements to show to users. This new id will be compared with whats in state for the 'last announcement shown', and if it's different then the announcement will render. As soon as an announcement is shown, the id will be updated in state. This ensures that announcements are not shown more than once, even if the user doesn't close it themselves.
*/
const Announcement = ({ version, hideAnnouncement }: AnnouncementProps) => {
	const minorVersion = version.split(".").slice(0, 2).join(".") // 2.0.0 -> 2.0
	return (
		<div
			style={{
				backgroundColor: "var(--vscode-editor-inactiveSelectionBackground)",
				borderRadius: "3px",
				padding: "12px 16px",
				margin: "5px 15px 5px 15px",
				position: "relative",
				flexShrink: 0,
			}}>
			<VSCodeButton appearance="icon" onClick={hideAnnouncement} style={{ position: "absolute", top: "8px", right: "8px" }}>
				<span className="codicon codicon-close"></span>
			</VSCodeButton>
			<h3 style={{ margin: "0 0 8px" }}>
				在v{minorVersion}版本中新功能
			</h3>
			<ul style={{ margin: "0 0 8px", paddingLeft: "12px" }}>
				<li>
					<b>检查点功能来了！</b>
					Rx-Cline 现在会在任务的每个步骤保存你的工作区快照。将鼠标悬停在任何消息上，查看两个新按钮：
					<ul style={{ margin: "4px 0", paddingLeft: 22 }}>
						<li>
							<span
								className="codicon codicon-diff-multiple"
								style={{
									fontSize: "12px",
									marginRight: "4px",
								}}></span>
							<b>比较</b> 显示快照与当前工作区之间的差异
						</li>
						<li>
							<span
								className="codicon codicon-discard"
								style={{
									fontSize: "12px",
									marginRight: "4px",
								}}></span>
							<b>恢复</b> 让你将项目的文件还原到任务中的那个点
						</li>
					</ul>
				</li>
				<li>
					<b>“查看新更改”按钮</b> 在任务完成时，显示 Rx-Cline 在任务过程中对您的工作区所做的所有更改的概览
				</li>
			</ul>
			<p style={{ margin: "8px 0" }}>
				<VSCodeLink href="https://x.com/sdrzn/status/1876378124126236949" style={{ display: "inline" }}>
					在这里查看 Checkpoints 的演示！
				</VSCodeLink>
			</p>
			{/*<ul style={{ margin: "0 0 8px", paddingLeft: "12px" }}>
				 <li>
					OpenRouter now supports prompt caching! They also have much higher rate limits than other providers,
					so I recommend trying them out.
					<br />
					{!apiConfiguration?.openRouterApiKey && (
						<VSCodeButtonLink
							href={getOpenRouterAuthUrl(vscodeUriScheme)}
							style={{
								transform: "scale(0.85)",
								transformOrigin: "left center",
								margin: "4px -30px 2px 0",
							}}>
							Get OpenRouter API Key
						</VSCodeButtonLink>
					)}
					{apiConfiguration?.openRouterApiKey && apiConfiguration?.apiProvider !== "openrouter" && (
						<VSCodeButton
							onClick={() => {
								vscode.postMessage({
									type: "apiConfiguration",
									apiConfiguration: { ...apiConfiguration, apiProvider: "openrouter" },
								})
							}}
							style={{
								transform: "scale(0.85)",
								transformOrigin: "left center",
								margin: "4px -30px 2px 0",
							}}>
							Switch to OpenRouter
						</VSCodeButton>
					)}
				</li> 
				<li>
					<b>Edit Cline's changes before accepting!</b> When he creates or edits a file, you can modify his
					changes directly in the right side of the diff view (+ hover over the 'Revert Block' arrow button in
					the center to undo "<code>{"// rest of code here"}</code>" shenanigans)
				</li>
				<li>
					New <code>search_files</code> tool that lets Cline perform regex searches in your project, letting
					him refactor code, address TODOs and FIXMEs, remove dead code, and more!
				</li>
				<li>
					When Cline runs commands, you can now type directly in the terminal (+ support for Python
					environments)
				</li>
			</ul>*/}
			<div
				style={{
					height: "1px",
					background: "var(--vscode-foreground)",
					opacity: 0.1,
					margin: "8px 0",
				}}
			/>
		</div>
	)
}

export default memo(Announcement)
