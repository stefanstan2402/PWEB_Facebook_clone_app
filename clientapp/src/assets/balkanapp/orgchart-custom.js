
OrgChart.prototype._hideBeforeAnimation = function(t) {
    
    for (const child of this.element.querySelectorAll("[data-n-id]")) {
        child.style.display = 'none';
    }
    this._hideBeforeAnimationCompleted = 1;
}

OrgChart.prototype._showAfterAnimation = function() {
    
    for (const child of this.element.querySelectorAll("[data-n-id]")) {
        child.style.display = 'block';
    }    
    
    this._hideBeforeAnimationCompleted = 0;
}